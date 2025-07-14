export function AddressForm(){
    return(
        <div className="flex justify-center">
            <form className="max-w-md mx-auto flex flex-col items-center">
                <label className="text-[#F9D848] text-l font-bold" htmlFor="adressInput">Lägg in adresser: </label>
                <br></br>
                <textarea className=" text-white p-2 pt-8 bg-[#3e3e3e] rounded-xl mt-2" name="adressInput" id="adressInput" cols="30" placeholder="Ange adresser här..."></textarea>
                <button className="bg-[linear-gradient(135deg,_#F9D848,_#f7cb08)] font-bold w-77 mt-4 p-2 rounded-xl" type="button">Optimera rutt</button>
            </form>
        </div>
    )
}