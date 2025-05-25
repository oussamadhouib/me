import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";
import bioData from "@/data/bio.json";
import skillsData from "@/data/skills.json";
import projectsData from "@/data/projects.json";

export async function POST(req: Request) {
  try {
    const { message, language = "en" } = await req.json();

    const bio = bioData[language as keyof typeof bioData];
    const projects = projectsData[language as keyof typeof projectsData];

    const systemPrompt = `You are an AI assistant representing Oussema Dhouib, a fullstack engineer. Here's information about Oussema:

Bio: ${bio.bio}
Title: ${bio.title}
Experience: ${bio.experience}
Location: ${bio.location}
Email: ${bio.email}

Skills: ${Object.values(skillsData)
      .flat()
      .map((skill) => skill.name)
      .join(", ")}

Recent Projects:
${projects
  .map(
    (p) =>
      `- ${p.title}: ${p.description} (Technologies: ${p.technologies.join(
        ", "
      )})`
  )
  .join("\n")}

Answer questions about Oussema's experience, skills, projects, and background in a friendly, professional tone. Keep responses concise but informative. If asked about something not in the provided information, politely say you don't have that specific information but offer to help with what you do know about Oussema.

Respond in ${language === "fr" ? "French" : "English"}.`;

    const { text } = await generateText({
      model: openai("gpt-3.5-turbo"),
      system: systemPrompt,
      prompt: message,
    });

    return Response.json({ message: text });
  } catch (error) {
    console.error("Chat API error:", error);
    return Response.json(
      { error: "Failed to process message" },
      { status: 500 }
    );
  }
}
