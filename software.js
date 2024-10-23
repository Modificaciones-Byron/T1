// Solicitar permisos de almacenamiento en Android al iniciar la app
document.addEventListener("deviceready", function() {
    if (cordova.plugins && cordova.plugins.permissions) {
        var permissions = cordova.plugins.permissions;
        permissions.checkPermission(permissions.WRITE_EXTERNAL_STORAGE, function(status) {
            if (!status.hasPermission) {
                // Solicitar permiso si no está concedido
                permissions.requestPermission(permissions.WRITE_EXTERNAL_STORAGE, function(status) {
                    if (status.hasPermission) {
                        console.log("Permiso de almacenamiento concedido");
                    } else {
                        console.log("Permiso de almacenamiento denegado");
                    }
                }, function() {
                    console.log("Error al solicitar permiso");
                });
            }
        }, function() {
            console.log("Error al verificar permiso");
        });
    } else {
        console.log("El plugin de permisos de Cordova no está disponible");
    }
});
const logosPath = {
    "AS PC": "logos/AS.png",
    "AS": "logos/AS.png",
    "ALYANZ GIRLS": "logos/ALYANZ.png",
    "ALYANZ UZK": "logos/ALYANZ.png",
    "ALYANZ E-SPORTS": "logos/ALYANZ.png",
    "AS NUVS": "logos/AS.png",
    "AS MOBILE": "logos/AS.png",
    "ASG MOB": "logos/ASG.png",
    "ASGARD": "logos/ASG.png",
    "ASG PC": "logos/ASG.png",
    "ASG PROSHU": "logos/ASG.png",
    "AGS EU": "logos/AGS.png",
    "AGSV2 ESPORTS": "logos/AGS.png",
    "ALQ": "logos/ALQ.png",
    "ALQ STORM": "logos/ALQ.png",
    "ALQ PREMIER": "logos/ALQ.png",
    "ALQ V2": "logos/ALQ.png",
    "BLOODLUST": "logos/BLOODLUST.png",
    "CLAN 666": "logos/CLAN_666.png",
    "CABRITAS": "logos/CABRITAS.png",
    "CLS": "logos/CLS.png",
    "CLS UNNAMED": "logos/CLS.png",
    "CLS UNNAMED R": "logos/CLS.png",
    "CLS PITUDOS": "logos/CLS.png",
    "CLS ROMPEKKS": "logos/CLS.png",
    "CLS SIX9": "logos/CLS.png",
    "CLS BLACK": "logos/CLS.png",
    "CLS BLACKBOX": "logos/CLS.png",
    "CLS ROMA": "logos/CLS.png",
    "CLS CUYS": "logos/CLS.png",
    "CLS MIX": "logos/CLS.png",
    "DYNASTY": "logos/DYNASTY.png",
    "DIENASTY": "logos/DNST.png",
    "DARK MYTH": "logos/DM.png",
    "EXY TOP": "logos/EXY_TOP.png",
    "E11 ELEVEN EXY": "logos/EXY_TOP.png",
    "EXY SA": "logos/EXY_SA.png",
    "EXY BIN PEN": "logos/EXY_SA.png",
    "EXY MOB": "logos/EXY_MOBILE.png",
    "EXY MOBILE": "logos/EXY_MOBILE.png",
    "EXY CREW": "logos/EXY_CREW.png",
    "EXY PRUEBAS": "logos/EXY_CREW.png",
    "EX WNG": "logos/EXWNG.png",
    "FXL": "logos/NO.png",  
    "GK PC": "logos/GK.png",
    "GK 1ST": "logos/GK.png",
    "GK ELITE PC": "logos/GK.png",
    "GK MOBILE": "logos/GK.png",
    "GLIZZY GLOBANT": "logos/GLIZZY.png",
    "GLIZZY GANG": "logos/GLIZZY.png",
    "GAMERS ELITE": "logos/GE.png",
    "GZ NIGHT": "logos/GLIZZY.png",
    "GZ ELITE": "logos/GLIZZY.png",
    "GZ XZ": "logos/GLIZZY.png",
    "GZ MIDNIGHT": "logos/GLIZZY.png",
    "7Z GLIZZY": "logos/GLIZZY.png",
    "IGZ": "logos/IGZ.png",
    "IGZ PC": "logos/IGZ.png",
    "IGZ BLOODIE": "logos/IGZ.png",
    "IGZ MOBILE": "logos/IGZ.png",
    "IGZ SNIPER": "logos/IGZ.png",
    "IGZ ELITE": "logos/IGZ.png",
    "IGZ INFAMOUS": "logos/IGZ.png",
    "RS ELITE": "logos/IGZ.png",
    "INTERPOL": "logos/ITP.png",
    "NOT": "logos/NOT.png",
    "NWA": "logos/NWA.png",
    "NEW DRAGON": "logos/NEWDRAGON.png",
    "NEW MOB": "logos/NEWDRAGON.png",
    "NOHAT": "logos/NOHAT.png",
    "NWG": "logos/NWG.png",
    "NOTHING": "logos/NTNG.png",
    "NWG PC": "logos/NWG.png",
    "NWG MOBILE": "logos/NWG.png",
    "NWG ELITE": "logos/NWG.png",
    "NWG KING": "logos/NWG.png",
    "NVIDIA": "logos/NVDIA.png",
    "NAGI": "logos/NAGI.png",
    "NVIDIA GG": "logos/NVDIA.png",
    "PXS SPORTS": "logos/PXS.png",
    "R3": "logos/R3.png",
    "RKN": "logos/RKN.png",
    "R6": "logos/RKN.png",  
    "RAPTORS T": "logos/RT.png",
    "RAPTORS TEAM": "logos/RT.png",
    "RS ELITE": "logos/RS.png",
    "RS": "logos/RS.png",
    "REAL SMOKE": "logos/RS.png",
    "KIDS GANG": "logos/KGANG.png",
    "PKB": "logos/PKB.png",
    "PKB F1": "logos/PKB.png",
    "SINEIRA": "logos/SN.png",
    "LEVIATANES": "logos/LEV.png",
    "T1": "logos/T1.png",
    "T1 PC": "logos/T1.png",
    "TTV": "logos/TTV.png",
    "TEAM 21": "logos/TEAM21.png",
    "UNNAMED": "logos/UNNAMED.png",
    "UNNAMED R": "logos/UNNAMED.png",
    "6XZ E-SPORTS": "logos/6XZ.png",
    "UZX E-SPORTS": "logos/UZX_E-SPORT.png",
    "UZX TEAM": "logos/UZX_TEAM.png",
    "VIXENS FURY": "logos/VX.png",
    "VIP E-SPORTS": "logos/VIP.png",
    "VYPER TEAM": "logos/VYPER.png",
    "WZE TEAM": "logos/WZE.png",
    "WZE": "logos/WZE.png",
    "O22": "logos/O22.png",
    "ZELTA": "logos/ZELTA.png",
    "ZENIN": "logos/ZENIN.png",
    "21S": "logos/21S.png",
    "1SKT MOBILE": "logos/SKT.png",
    "WTH RD": "logos/WTH.png",
    "WTH DS": "logos/WTH.png",
    "WHITE DEATH": "logos/WTH.png",
    "KENIT SPORTS": "logos/KENIT.png",
    "ELITE KENIT": "logos/KENIT.png",
    "ELITE": "logos/KENIT.png",
    "ULT ELITE": "logos/ULT.png",
    "NEW": "logos/NEWBR.png",
    "METSU": "logos/METSU.png",
    "METSU": "logos/METSU.png",
    "METSU ONI": "logos/METSU.png",
    "MS": "logos/METSU.png",
    "CRV FEMININA": "logos/CRV.png",
    "CRV": "logos/CRV.png",
    "GS IMPERIAL": "logos/GS.png",
    "FENIX Z1": "logos/FENIX.png",
    "FENIX": "logos/FENIX.png",
    "ALQAEDA": "logos/ALQ.png",
    "ISD": "logos/ISD.png",
    
    // Agrega más equipos y rutas de logos aquí
};

const positions = {
    logo: [
        [680, 1110], [685, 1250], [680, 1390], [680, 1530],
        [680, 1670], [680, 1810], [680, 1955], [680, 2095],
        [680, 2235], [680, 2375], [680, 2515], [680, 2655],
        [680, 2795], [680, 2935], [680, 3075],
    ],
    equipo: [
        [1570, 1215], [1570, 1355], [1570, 1495], [1570, 1635],
        [1570, 1775], [1570, 1915], [1570, 2055], [1570, 2200],
        [1570, 2340], [1570, 2480], [1570, 2620], [1570, 2760],
        [1570, 2900], [1570, 3040], [1570, 3180],
    ],
    kills: [
        [2340, 1220], [2340, 1360], [2340, 1500], [2340, 1640],
        [2340, 1780], [2340, 1920], [2340, 2060], [2340, 2200],
        [2340, 2340], [2340, 2480], [2340, 2620], [2340, 2760],
        [2340, 2900], [2340, 3040], [2340, 3185], 
    ],
    top: [
        [2680, 1220], [2680, 1360], [2680, 1500], [2680, 1640],
        [2680, 1780], [2680, 1920], [2680, 2060], [2680, 2200],
        [2680, 2340], [2680, 2480], [2680, 2620], [2680, 2760],
        [2680, 2900], [2680, 3040], [2680, 3185],
    ],
    total: [
        [3031, 1220], [3031, 1360], [3031, 1500], [3031, 1640],
        [3031, 1780], [3031, 1920], [3031, 2060], [3031, 2200],
        [3031, 2340], [3031, 2480], [3031, 2620], [3031, 2760],
        [3031, 2900], [3031, 3040], [3031, 3185],
    ]
};

class Equipo {
    constructor(nombre) {
        this.nombre = nombre;
        this.kills = Array(4).fill(0);
        this.top = Array(4).fill(0);
        this.totalKills = 0;
        this.totalTop = 0;
        this.totalPuntaje = 0;
    }

    calcularTotales() {
        this.totalKills = this.kills.reduce((a, b) => a + b, 0);
        this.totalTop = this.top.reduce((a, b) => a + this.calcularPuntosTop(b), 0);
        this.totalPuntaje = this.totalKills + this.totalTop;
    }

    calcularPuntosTop(posicion) {
        const puntos = {
            1: 35, 
            2: 30, 
            3: 25, 
            4: 20,
            5: 10, 
            6: 7, 
            7: 5, 
            8: 3,
            9: 2, 
            10: 1
        };
        return puntos[posicion] || 0;
    }
}

let equipos = [];
let numEquipos = 0;
const abecedario = "ABCDEFGHIJKLMNO"; // Letras del abecedario

function iniciar() {
    numEquipos = parseInt(document.getElementById("numEquipos").value);
    if (numEquipos >= 1 && numEquipos <= 15) {
        const form = document.getElementById("equiposForm");
        form.innerHTML = "";  // Limpiar entradas anteriores

        for (let i = 0; i < numEquipos; i++) {
            const equipoDiv = document.createElement("div");
            equipoDiv.className = "equipo";

            // Crear etiqueta con la letra correspondiente
            const letraEquipo = abecedario[i]; // Obtener letra del abecedario
            const nombreLabel = document.createElement("label");
            nombreLabel.textContent = `Equipo ${i + 1} - ${letraEquipo}:`;
            equipoDiv.appendChild(nombreLabel);

            // Input para el nombre del equipo
            const nombreInput = document.createElement("input");
            nombreInput.placeholder = `Nombre del equipo ${letraEquipo}`;
            nombreInput.className = "nombre-equipo"; // Asigna la clase para el nombre del equipo
            equipoDiv.appendChild(nombreInput);

            // Crear un contenedor para las 4 salas (Kills y Tops)
            const salasDiv = document.createElement("div");
            salasDiv.className = "salas";

            for (let j = 0; j < 4; j++) {
                const salaDiv = document.createElement("div");
                salaDiv.className = "sala";

                // Crear inputs para Kills
                const killsLabel = document.createElement("label");
                killsLabel.textContent = `Sala ${j + 1} Kills:`;
                salaDiv.appendChild(killsLabel);

                const killsInput = document.createElement("input");
                killsInput.type = "number"; // Cambiar a number para validar la entrada
                killsInput.placeholder = `Kills Sala ${j + 1}`;
                killsInput.className = "kills-top"; // Asigna la clase para kills
                salaDiv.appendChild(killsInput);

                // Crear inputs para Tops
                const topLabel = document.createElement("label");
                topLabel.textContent = `Top:`;
                salaDiv.appendChild(topLabel);

                const topInput = document.createElement("input");
                topInput.type = "number"; // Cambiar a number para validar la entrada
                topInput.placeholder = `Top Sala ${j + 1} (1-15)`;
                topInput.className = "kills-top"; // Asigna la clase para tops
                salaDiv.appendChild(topInput);

                salasDiv.appendChild(salaDiv);
            }
            
            equipoDiv.appendChild(salasDiv);
            form.appendChild(equipoDiv);
        }
        document.getElementById("resultadosButton").disabled = false;
    } else {
        alert("El número de equipos debe estar entre 1 y 15.");
    }
}


function generarResultados() {
    equipos.length = 0;  // Reiniciar el array de equipos
    const inputs = document.querySelectorAll(".equipo");
    inputs.forEach(input => {
        const nombre = input.querySelector("input[placeholder^='Nombre del equipo']").value;
        
        const equipo = new Equipo(nombre);
        for (let j = 0; j < 4; j++) {
            equipo.kills[j] = parseInt(input.querySelector(`input[placeholder='Kills Sala ${j + 1}']`).value) || 0;
            equipo.top[j] = parseInt(input.querySelector(`input[placeholder='Top Sala ${j + 1} (1-15)']`).value) || 0;
        }
        equipo.calcularTotales();
        equipos.push(equipo);
    });

    equipos.sort((a, b) => b.totalPuntaje - a.totalPuntaje);
    equipos.splice(15);  // Limitar a los 8 mejores equipos

    const resultsText = equipos.map(e => `${e.nombre},${e.totalKills},${e.totalTop},${e.totalPuntaje}`).join("\n");
    localStorage.setItem('resultados', resultsText);
    document.getElementById("imagenButton").disabled = false;
}

function crearImagen() {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = "Plantilla/Tabla.png";  // Ruta a la imagen de la plantilla

    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        let logosCargados = 0;

        equipos.forEach((equipo, index) => {
            const logo = new Image();
            logo.src = logosPath[equipo.nombre] || "logos/default.png"; 

            logo.onload = function () {
                ctx.drawImage(logo, ...positions.logo[index], 130, 130);

                // Nombres de equipos con negrita
                ctx.fillStyle = "black"; // Nombres en negro
                ctx.font = "bold 95px Montserrat"; // Aplicar negrita
                ctx.textAlign = "center"; // Centrar el texto
                ctx.fillText(equipo.nombre, positions.equipo[index][0], positions.equipo[index][1]);

                // Kills en negrita
                ctx.fillStyle = "black"; // Kills en negro
                ctx.font = "bold 100px Montserrat"; // Aplicar negrita
                ctx.textAlign = "center";
                ctx.fillText(equipo.totalKills, positions.kills[index][0], positions.kills[index][1]);

                // Top y Total en blanco (sin negrita si prefieres)
                ctx.fillStyle = "white";
                ctx.font = "bold 100px Montserrat"; // Aplicar negrita
                ctx.fillText(equipo.totalTop, positions.top[index][0], positions.top[index][1]);
                ctx.fillText(equipo.totalPuntaje, positions.total[index][0], positions.total[index][1]);

                logosCargados++;
                if (logosCargados === equipos.length) {
                    setTimeout(() => {
                        const imgURL = canvas.toDataURL("image/png");
                        const link = document.createElement("a");
                        link.href = imgURL;
                        link.download = "Tabla_Resultados.png";
                        link.click();
                    }, 1000);
                }
            };

            // Error de carga del logo
            logo.onerror = function () {
                ctx.fillStyle = "black"; // Nombres en negro
                ctx.font = "bold 95px Montserrat"; // Aplicar negrita
                ctx.textAlign = "center"; // Centrar el texto
                ctx.fillText(equipo.nombre, positions.equipo[index][0], positions.equipo[index][1]);

                ctx.fillStyle = "black"; // Kills en negro
                ctx.font = "bold 100px Montserrat"; // Aplicar negrita
                ctx.textAlign = "center";
                ctx.fillText(equipo.totalKills, positions.kills[index][0], positions.kills[index][1]);

                ctx.fillStyle = "white"; // Top y Total en blanco
                ctx.font = "bold 100px Montserrat"; // Aplicar negrita
                ctx.fillText(equipo.totalTop, positions.top[index][0], positions.top[index][1]);
                ctx.fillText(equipo.totalPuntaje, positions.total[index][0], positions.total[index][1]);

                logosCargados++;
                if (logosCargados === equipos.length) {
                    setTimeout(() => {
                        const imgURL = canvas.toDataURL("image/png");
                        const link = document.createElement("a");
                        link.href = imgURL;
                        link.download = "Tabla_Resultados.png";
                        link.click();
                    }, 1000);
                }
            };
        });
    };
}



document.getElementById("iniciarButton").onclick = iniciar;
document.getElementById("resultadosButton").onclick = generarResultados;
document.getElementById("imagenButton").onclick = crearImagen;
