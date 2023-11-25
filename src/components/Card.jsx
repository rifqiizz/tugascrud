"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsThermometerHigh } from 'react-icons/bs';
import { BsEnvelope } from 'react-icons/bs';
import { BsTree } from 'react-icons/bs';

export const Card = ({ id, name, keterangan, tanggal, jenis }) => {
  const router = useRouter();
  const [onEdit, setOnEdit] = useState(false);
  const [currentName, setCurrentName] = useState(name);
  const [currentDesc, setCurrentDesc] = useState(keterangan);
  const [currentTgl, setCurrentTgl] = useState(tanggal);
  const [currentJenis, setCurrentJenis] = useState(jenis);

  async function handleDelete() {
    var result = confirm("Want to delete?");
    if (result) {
        //Logic to delete the item
        await fetch(`https://v1.appbackend.io/v1/rows/ZcxAwFXEUdKr`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify([`${id}`])
        });
        router.refresh();
    }
    
  }

  async function handleUpdate() {
    const res = await fetch(`https://v1.appbackend.io/v1/rows/ZcxAwFXEUdKr`, {
        method: "PUT",
        headers: {
              'Content-Type': 'application/json'
        },
        body: JSON.stringify({"_id":`${id}`,"name":`${name}`,"tanggal":`${tanggal}`,"jenis":`${jenis}`,"keterangan":currentDesc})
      //body: JSON.stringify({ content: currentContent }),
    });
    const data = await res.json();
    setOnEdit(false);
    router.refresh();
  }

  return (
    <div>
    <div key={id} className="flex flex-row justify-between border border-gray-400 m-4 mb-0 p-4 rounded-tl-md rounded-tr-md">
        <div>
            <div className="text-lg font-semibold">{name}</div>
            <div className="flex flex-row text-red-800 text-sm"><span><BsEnvelope size={20} /> </span>&nbsp;{jenis}</div>
            <div className="text-slate-700 text-sm italic break-words">{keterangan}</div>
        </div>
        <div>
        <div className="text-sm font-mono pt-2">{tanggal}</div>
        </div>
        </div>
        <div className="flex flex-row justify-start border border-gray-400 gap-2 m-4 mt-0 p-4 bg-slate-400 rounded-bl-md rounded-br-md">
      {onEdit ? (
        <input id="crDesc" value={currentDesc} onChange={(e) => setCurrentDesc(e.target.value)} className="border-2 p-2 rounded-sm" />
        
) : (
        <div></div>
      )}
      {onEdit ? (
        <button className="text-xs bg-emerald-300 text-emerald-800 p-1 rounded-sm" onClick={handleUpdate}>
          Update
        </button>
      ) : (
        <button className="text-xs bg-yellow-300 text-yellow-800 p-1 rounded-sm" onClick={() => setOnEdit(true)}>
          Quick Edit Note
        </button>
      )}
      <button className="text-xs bg-rose-300 text-rose-800 p-1 rounded-sm" onClick={handleDelete}>
        Delete
      </button>
      </div>
    </div>
  );
};
