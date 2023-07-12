import { useState } from 'react';
import ReactQuill from 'react-quill';

export default function TextEditor() {
  const [value, setValue] = useState(`
  <p><span style="background-color: yellow;">hola XDDD</span></p>`);
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      [
        {
          color: ['black', 'red', 'blue', 'yellow'],
        },
        {
          background: ['black', 'red', 'blue', 'yellow'],
        },
      ],
    ],
  };
  return (
    <div className="relative h-screen w-full bg-white p-2">
      <div className="h-full w-full flex items-center justify-center">
        <div className="relative h-full w-1/2 flex items-center justify-center">
          <ReactQuill className="h-full w-full" theme="snow" value={value} onChange={setValue} modules={modules} />
        </div>
        <div className="relative h-full w-1/2 flex items-center justify-center">{value}</div>
      </div>
    </div>
  );
}
