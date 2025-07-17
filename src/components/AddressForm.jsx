import axios from 'axios';

export function AddressForm({setWaypoints, setUrl}){

async function fetchOptimizedRoute(waypoints) {
  try {
    const start = "Frykholmsgatan 5, 28130 Hässleholm";
    const end = "Frykholmsgatan 5, 28130 Hässleholm";

    const response = await axios.post("https://rutt-backend.vercel.app/api/route", {
      start,
      end,
      waypoints,
    });

    const optimizedWaypoints = response.data.optimized;
    const fullRoute = [start, ...optimizedWaypoints, end];
    const mapsUrl = 'https://www.google.com/maps/dir/' + fullRoute.map(addr => encodeURIComponent(addr)).join('/');
    setUrl(mapsUrl);
  } catch (error) {
    console.error('❌ Kunde inte hämta rutt:', error);
  }
}

    function handleAdress(e){
        e.preventDefault();
        const userWaypoints = e.target.adressInput.value.split("\n");
        fetchOptimizedRoute(userWaypoints)
    }

    return(
        <div className="flex justify-center">
            <form className="max-w-md mx-auto flex flex-col items-center" onSubmit={handleAdress}>
                <label className="text-[#F9D848] text-l font-bold" htmlFor="adressInput">Lägg in adresser: </label>
                <br></br>
                <textarea className=" text-white p-2 pt-8 bg-[#3e3e3e] rounded-xl" name="adressInput" id="adressInput" cols="30" placeholder="Ange adresser här..."></textarea>
                <button className="bg-[linear-gradient(135deg,_#F9D848,_#f7cb08)] hover:brightness-110 hover:shadow-md active:scale-95 transition-all duration-200 font-bold w-77 mt-4 p-2 rounded-xl" type="submit">Optimera rutt</button>
            </form>
        </div>
    )
}