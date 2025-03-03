import React, { useState } from "react";
import Inputarea from "../components/Inputarea";
import Textarea from "../components/Textarea";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [paragraphs, setParagraphs] = useState([{ heading: "", context: "" }]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {
      title,
      description,
      content,
      paragraphs,
    };
    console.log("Blog Created:", blog);
    alert("Blog published successfully!");
    setTitle("");
    setDescription("");
    setContent("");
    setParagraphs([{ heading: "", context: "" }]);
  };

  const handleAddParagraph = () => {
    setParagraphs([...paragraphs, { heading: "", context: "" }]);
  };

  const handleParagraphChange = (index, field, value) => {
    const updatedParagraphs = paragraphs.map((para, i) =>
      i === index ? { ...para, [field]: value } : para
    );
    setParagraphs(updatedParagraphs);
  };

  return (
    <div className="bg-white rounded">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Create a New Blog
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <Inputarea
          label={"Title"}
          placeholder={"Write blog title here"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <Textarea
          label={"Description"}
          placeholder={"Write blog description here"}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        {paragraphs.map((para, index) => (
          <Paragraph
            key={index}
            index={index}
            heading={para.heading}
            context={para.context}
            onParagraphChange={handleParagraphChange}
          />
        ))}
        <div
          className="w-full p-4 text-sm font-semibold text-white bg-gray-500 rounded-lg hover:bg-gray-600 transition duration-300 text-center cursor-pointer"
          onClick={handleAddParagraph}
        >
          Add paragraph
        </div>
        <div>
          <button
            type="submit"
            className="w-full p-4 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Publish Blog
          </button>
        </div>
      </form>
    </div>
  );
};

const Paragraph = ({ index, heading, context, onParagraphChange }) => {
  return (
    <div className="border rounded border-gray-200 p-4 flex flex-col gap-4">
      <h1 className="font-bold text-gray-400 mb-4">Para: {index + 1}</h1>
      <Inputarea
        label={"Heading"}
        placeholder={"Create para Heading"}
        value={heading}
        onChange={(e) => onParagraphChange(index, "heading", e.target.value)}
      />
      <Textarea
        label={"Context"}
        placeholder={"Write content here"}
        value={context}
        onChange={(e) => onParagraphChange(index, "context", e.target.value)}
      />
    </div>
  );
};

export default CreateBlog;
