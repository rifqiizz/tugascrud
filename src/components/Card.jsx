"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export const Card = ({ id, name, keterangan, tanggal, jenis }) => {
  const router = useRouter();
  const [onEdit, setOnEdit] = useState(false);
  const [currentName, setCurrentName] = useState(name);
  const [currentDesc, setCurrentDesc] = useState(keterangan);
  const [currentTgl, setCurrentTgl] = useState(tanggal);
  const [currentJenis, setCurrentJenis] = useState(jenis);

  async function handleDelete() {
    await fetch(`https://v1.appbackend.io/v1/rows/ZcxAwFXEUdKr`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([`${id}`])
    });
    router.refresh();
  }

  async function handleUpdate() {
    const res = await fetch(`https://v1.appbackend.io/v1/rows/ZcxAwFXEUdKr`, {
        method: "PUT",
        headers: {
              'Content-Type': 'application/json'
        },
        body: JSON.stringify({"_id":`${id}`,"name":currentName,"tanggal":`${tanggal}`,"jenis":`${jenis}`,"keterangan":`${keterangan}`})
      //body: JSON.stringify({ content: currentContent }),
    });
    const data = await res.json();
    setOnEdit(false);
    router.refresh();
  }

  return (
    <div>
    <div key={id} className="flex flex-row justify-between border m-4 mb-0 p-4">
        <div>
            <div className="text-lg">{name}</div>
            <div>{jenis}</div>
            <div>{keterangan}</div>
        </div>
        <div>
        <div className="text-md">{tanggal}</div>
        </div>
        </div>
        <div className="flex flex-row justify-start border gap-2 m-4 mt-0 p-4 bg-slate-400">
      {onEdit ? (
        <input id="crName" value={currentName} onChange={(e) => setCurrentName(e.target.value)} className="border-2 p-2 rounded-sm" />
        
) : (
        <div></div>
      )}
      {onEdit ? (
        <button className="text-xs bg-emerald-300 text-emerald-800 p-1 rounded-sm" onClick={handleUpdate}>
          Update
        </button>
      ) : (
        <button className="text-xs bg-yellow-300 text-yellow-800 p-1 rounded-sm" onClick={() => setOnEdit(true)}>
          Quick Edit
        </button>
      )}
      <button className="text-xs bg-rose-300 text-rose-800 p-1 rounded-sm" onClick={handleDelete}>
        Delete
      </button>
      </div>
    </div>
  );
};
