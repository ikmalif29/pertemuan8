import { Info } from "lucide-react";
import { Heart } from "lucide-react";

/* eslint-disable react/prop-types */
export default function Animals({ animals }) {
    return (
        <>
            <div className="flex w-full justify-center items-center mx-auto">
                <div className="flex gap-4 w-auto">
                    {animals.map((a) => (
                        <div key={a.id} className="flex flex-col items-center w-60 border-2 border-black rounded-3xl overflow-hidden">
                            <img src={a.gambar} alt="" />
                            <h2 className="text-2xl">{a.nama}</h2>
                            <h2 className="text-xl">{a.warna}</h2>
                            <h2 className="text-xl">{a.jumlahKaki}</h2>
                            <div className="flex gap-5 my-3">
                                <Heart />
                                <Info />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}