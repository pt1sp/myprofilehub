import React, { useState } from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const ContactInfo = styled.div`
  margin-bottom: 2rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  min-height: 150px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // ここでフォームの送信処理を実装します
    console.log("フォーム送信:", { name, email, message });
    // フォームをリセット
    setName("");
    setEmail("");
    setMessage("");
    // 成功メッセージを表示するなどの処理を追加できます
  };

  return (
    <ContactContainer>
      <h2>お問い合わせ</h2>
      <ContactInfo>
        <p>お気軽にご連絡ください。以下の方法でお問い合わせいただけます：</p>
        <ul>
          <li>メール: fcz53eiswy@gmail.com</li>
          <li>電話: 090-xxxx-xxx</li>
        </ul>
      </ContactInfo>
      <ContactForm onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">お名前：</Label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">メールアドレス：</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">メッセージ：</Label>
          <TextArea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </FormGroup>
        <SubmitButton type="submit">送信</SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;
