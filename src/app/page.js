import { Form } from "@/components/Form";
import { Header } from "@/components/Header";
import { Card } from "@/components/Card";

async function getNotes(){
  const res = await fetch("https://v1.appbackend.io/v1/rows/ZcxAwFXEUdKr",{
    cache: "no-store",  
  });
  const result = await res.json();
  //const coba = JSON.parse(data);
  //console.log(coba);
  return result;
}

export default async function Page() {
  const { data } = await getNotes();
  //console.log(typeof({data}));
  //console.log(data);

  /*<div key={_id} className="flex flex-row justify-between border rounded-md m-4 p-4">
                <div>
                  <div className="text-lg">{name}</div>
                  <div>{jenis}</div>
                  <div>{keterangan}</div>
                </div>
                <div>
                <div className="text-md">{tanggal}</div>
                </div>
                </div> */

  return (
    <div>
      <Header />
      <div className="flex justify-between">
        <div className="w-full">
          <div className="p-2 text-lg bg-blue-300">
            <h1>Daftar Ketidakhadiran </h1>
          </div>
          <div className="flex flex-row justify-center h-screen bg-purple-300">
            <div className="max-h-screen overflow-y-auto">
          <div className="grid grid-cols-3 m-1">
            {data?.map(({ _id, keterangan, name, tanggal, jenis}) => {
              return (
              /* <div key={_id} className="flex flex-row justify-between border rounded-md m-4 p-4">
                <div>
                  <div className="text-lg">{name}</div>
                  <div>{jenis}</div>
                  <div>{keterangan}</div>
                </div>
                <div>
                <div className="text-md">{tanggal}</div>
                </div>
                </div> */
                <Card key={_id} id={_id} name={name} keterangan={keterangan} tanggal={tanggal} jenis={jenis} />
                );
            })}
          </div>
          </div>
          </div>
        </div>
        <Form />
      </div>
    </div>
  )
}
