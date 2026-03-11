import type { RequestHandler } from "express";
import auth
import { GoogleGenAI } from "@google/genai";
const apiKey = process.env.GENAI_API_KEY;
type Message = {
  role: "user" | "assistant";
  content: string;
};
const fixedData = "Манай веб сайт нь жижиг дунд худалдаа үйлдвэр бизнес эрхлэгчдэд голчлон зориулагдсан санхүү ба маркетингийн зөвлөгөө өгдөг хиймэл оюунд суурилсан платформ юм. Долоо хоног, сар жилийн орлого зарлага санхүүгийн мэдээллийг тань ашиглан статистик мэдээлэл гаргаж, завгүй бизнес эрхлэгчдэд туслалцаа үзүүлэх зорилготой. Хэрэв хэрэглэгч бүртгэлгүй/ нэвтрээгүй бол ${signuplink} рүү орж нэвтрэхийг урамшуул. Хэрэв хэрэглэгчийн нэр дээрх компанийн мэдээлэл олдоогүй бол санхүү стратеги болон маркетийн зөвлөгөө бүү өг, харин хэрэглэгчийг байгууллагаа бүртгүүлээд, хэрэгтэй дата мэдээллээ бөглөж өгөхийг уриалаарай"
export const Chat: RequestHandler = async (req, res) => {
  const { chats } = req.body as { chats: Message[] };

  const history = chats.slice(0, -1).map((msg: Message) => ({
    role: msg.role === "assistant" ? "model" : "user",
    parts: [{ text: msg.content }],
  }));
  try {
    if (!apiKey) {
      return res.status(500).json({ message: "ApiKey issue" });
    }

    if (!chats) {
      return res.status(401).json({ message: "input invalid" });
    }
    const ai = new GoogleGenAI({ apiKey });
    const chat = ai.chats.create({
      model: "gemini-2.5-flash",

      history,
      config: {
        systemInstruction:
          "Та бизнесийн AI зөвлөгч, манай байгууллагыг төлөөлж хэрэглэгчдэд хариу өгнө. Санхүү, маркетингийн асуултад Монгол хэлээр хариулна. Хариултаа товч тодорхой өгөөрэй",
        temperature: 0.2
      },
    });

    const lastMessage = chats[chats.length - 1];
    const response = await chat.sendMessage({ message: lastMessage.content });

    if (!response) {
      console.log("response failed");
    }
    const assistantMsg = response.text || "error";

    return res.status(200).json({ res: assistantMsg });
  } catch (e) {
    return res.status(500).json({ success: false, message: e });
  }
};
