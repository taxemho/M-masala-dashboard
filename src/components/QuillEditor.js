import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const QuillEditor = ({ value, onChange }) => {
  const [editorHtml, setEditorHtml] = useState(value);

  const handleChange = (html) => {
    setEditorHtml(html);
    onChange(html);
  };

  return (
    <ReactQuill
      theme="snow"
      value={editorHtml}
      onChange={handleChange}
      modules={{
        toolbar: {
          container: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ font: [] }],
            [{ size: ['small', false, 'large', 'huge'] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ color: [] }, { background: [] }],
            [{ script: 'sub' }, { script: 'super' }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ align: [] }],
            ['blockquote', 'code-block'],
            ['link', 'image', 'video'],
            ['clean']
          ]
        }
      }}
      formats={[
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'script', 'blockquote', 'code-block',
        'list', 'bullet', 'align',
        'link', 'image', 'video', 'color', 'background'
      ]}
      placeholder="Write something..."
    />
  );
};

export default QuillEditor;
