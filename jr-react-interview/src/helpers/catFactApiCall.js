export const catFactApicall = async()=> {
        const url = "https://catfact.ninja/fact";
        const resp = await fetch(url);
        const data = await resp.json();
        return data;
    }

