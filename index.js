const url = 'https://api.covid19api.com/summary';

async function getCases(){
    const response = await fetch(url);
    const data = await response.json();
    document.getElementById('global1').innerHTML = data.Global.TotalConfirmed;
    document.getElementById('global2').innerHTML = data.Global.TotalDeaths;
    document.getElementById('global3').innerHTML = data.Global.TotalRecovered;
}

getCases();

async function getCountry(){
    const response = await fetch(url);
    const data = await response.json();
    
    for(var i=0;i<data.Countries.length;i++){
        var table = document.getElementById('myTable');
        var row=table.insertRow(i+1);

        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4); 
        var cell5 = row.insertCell(5);
        var cell6 = row.insertCell(6);

        cell0.innerHTML=data.Countries[i].Country;
        cell1.innerHTML=data.Countries[i].TotalConfirmed;
        cell2.innerHTML=data.Countries[i].TotalDeaths;
        cell3.innerHTML=data.Countries[i].NewConfirmed;
        cell4.innerHTML=data.Countries[i].NewDeaths;
        cell5.innerHTML=data.Countries[i].NewRecovered;
        cell6.innerHTML=data.Countries[i].TotalRecovered;
    }
}

getCountry().catch(error=>{
    console.log("ERROR");
});



