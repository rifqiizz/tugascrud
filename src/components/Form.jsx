"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export const Form = () => {
  const router = useRouter();
  const [note, setNote] = useState("");
  //console.log('Isitext: ',setNote);

  async function createNote() {
    let txtName = document.getElementById("formNama").value;
    let txtTgl = document.getElementById("formTgl").value;
    let txtTipe = document.getElementById("formTipe").value;
    let txtDesc = document.getElementById("formDesc").value;
    console.log("Nama ",txtName);
    console.log("Tanggal ",txtTgl);
    console.log("Tipe ",txtTipe);
    console.log("Keterangan ",txtDesc);
    const res = await fetch("https://v1.appbackend.io/v1/rows/ZcxAwFXEUdKr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ name: txtName, tanggal: txtTgl, jenis:txtTipe, keterangan:txtDesc }]),
    });
    const data = await res.json();
    console.log(data);
    resetForm();
    //alert(document.getElementById("frmNama").value);
    router.refresh();
  }

  function resetForm() {
    document.getElementById("formNama").value = '';
    document.getElementById("formTgl").value = '';
    document.getElementById("formTipe").value = '';
    document.getElementById("formDesc").value = '';
  }

  return (
    <div className=' flex flex-col h-screen'>
        <div className="p-2 pl-3 text-lg font-semibold text-slate-700">
            <h3>Form Ketidakhadiran</h3>
        </div>
        <div className="p-4">
      <div className="pb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">Nama</label>
        <input id="formNama" className='border border-gray-400 text-md w-full' placeholder='Tulis nama karyawan' onChange={(e) => setNote(e.target.value)} />
      </div>
      <div className="pb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">Tanggal</label>
        <input type="date" id="formTgl" name="formTgl"  className=" border" />
      </div>
      <div className="pb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">Tidak hadir karena</label>
        <select name="formTipe" id="formTipe" className=" border w-full">
            <option value="SAKIT">Sakit</option>
            <option value="IZIN">Izin</option>
            <option value="CUTI">Cuti</option>
            <option value="ALPA">Tanpa Keterangan</option>
        </select>
      </div>
      <div className="pb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">Keterangan</label>
        <textarea id="formDesc" name="formDesc" rows="4" cols="30" className=" border">
        </textarea>
      </div>
      <button className="bg-green-600 text-white m-2 p-3 rounded-md" onClick={createNote}>Simpan</button>
      </div>
    </div>
  );
};
