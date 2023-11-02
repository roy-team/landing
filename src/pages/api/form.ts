import { NextApiRequest, NextApiResponse } from "next";
import { Language } from "@shared/constants/language";

type Data = {
  name: string;
  question: string;
  contacts: string;
  language: Language;
};

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  const { contacts, language, name, question } = req.body as Data;
  const tgToken = process.env.TG_TOKEN;
  const chat_id = process.env.CHAT_ID;
  if (!tgToken) {
    res.status(500).json({ message: "missing bot token" });
  }
  if (!chat_id) {
    res.status(500).json({ message: "missing chat id" });
  }
  if (!contacts || !language || !name || !question) {
    res.status(400).json({ message: "invalid data" });
  }
  fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id,
      text: `Язык: ${language},\nИмя: ${name},\nКонтактные данные: ${contacts},\nВопрос: ${question}`,
    }),
  })
    .then(() => res.status(200).json({ ok: true }))
    .catch((error) => res.status(500).json(error));
}
