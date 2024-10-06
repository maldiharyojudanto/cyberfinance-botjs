import chalk from "chalk";
import fs from "fs";
import dotenv from "dotenv";
import moment from "moment";
import figlet from "figlet";

dotenv.config();

const getToken = async (query) => {
    const url = "https://api.cyberfin.xyz/api/v1/game/initdata"

    const payload = JSON.stringify({
        "initData": query
    })

    const headers = {
        'accept': 'application/json',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'application/json',
        'origin': 'https://g.cyberfin.xyz',
        'priority': 'u=1, i',
        'referer': 'https://g.cyberfin.xyz/',
        'sec-ch-ua': '"Microsoft Edge";v="129", "Not=A?Brand";v="8", "Chromium";v="129", "Microsoft Edge WebView2";v="129"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0'
    }

    while(true) {
        try {
            const response = await fetch(url, {
                method: 'post',
                headers: headers,
                body: payload
            })

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }

            return await response.json()
        } catch (err) {
            console.log(`Error to getToken, ${err}`)
        }
    }
}

const getInfo = async (token) => {
    const url = "https://api.cyberfin.xyz/api/v1/game/mining/gamedata"

    const headers = {
        'accept': 'application/json',
        'accept-language': 'en-US,en;q=0.9',
        'authorization': `Bearer ${token}`,
        'origin': 'https://g.cyberfin.xyz',
        'priority': 'u=1, i',
        'referer': 'https://g.cyberfin.xyz/',
        'sec-ch-ua': '"Microsoft Edge";v="129", "Not=A?Brand";v="8", "Chromium";v="129", "Microsoft Edge WebView2";v="129"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0'
    }

    while(true) {
        try {
            const response = await fetch(url, {
                method: 'get',
                headers: headers,
            })

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }

            return await response.json()
        } catch (err) {
            console.log(`Error to getInfo, ${err}`)
        }
    }
}

const startClaim = async (token) => {
    const url = "https://api.cyberfin.xyz/api/v1/mining/claim"

    const headers = {
        'accept': 'application/json',
        'accept-language': 'en-US,en;q=0.9',
        'authorization': `Bearer ${token}`,
        'origin': 'https://g.cyberfin.xyz',
        'priority': 'u=1, i',
        'referer': 'https://g.cyberfin.xyz/',
        'sec-ch-ua': '"Microsoft Edge";v="129", "Not=A?Brand";v="8", "Chromium";v="129", "Microsoft Edge WebView2";v="129"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0'
    }

    while(true) {
        try {
            const response = await fetch(url, {
                method: 'get',
                headers: headers,
            })

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }

            return await response.json()
        } catch (err) {
            if (err == "Error: 400 Bad Request") {
                break 
            } else {
                console.log(`Error to startClaim, ${err}`)
            }
        }
    }
}

const getTasks = async (token) => {
    const url = "https://api.cyberfin.xyz/api/v1/gametask/all"

    const headers = {
        'accept': 'application/json',
        'accept-language': 'en-US,en;q=0.9',
        'authorization': `Bearer ${token}`,
        'origin': 'https://g.cyberfin.xyz',
        'priority': 'u=1, i',
        'referer': 'https://g.cyberfin.xyz/',
        'sec-ch-ua': '"Microsoft Edge";v="129", "Not=A?Brand";v="8", "Chromium";v="129", "Microsoft Edge WebView2";v="129"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0'
    }

    while(true) {
        try {
            const response = await fetch(url, {
                method: 'get',
                headers: headers,
            })

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }

            return await response.json()
        } catch (err) {
            console.log(`Error to getTasks, ${err}`)
        }
    }
}

const claimTask = async (token, uuid) => {
    const url = `https://api.cyberfin.xyz/api/v1/gametask/complete/${uuid}`

    const headers = {
        'accept': 'application/json',
        'accept-language': 'en-US,en;q=0.9',
        'authorization': `Bearer ${token}`,
        'origin': 'https://g.cyberfin.xyz',
        'priority': 'u=1, i',
        'referer': 'https://g.cyberfin.xyz/',
        'sec-ch-ua': '"Microsoft Edge";v="125", "Chromium";v="125", "Not.A/Brand";v="24", "Microsoft Edge WebView2";v="125"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'secret-key': 'cyberfinance',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0'
    }

    while(true) {
        try {
            const response = await fetch(url, {
                method: 'PATCH',
                headers: headers,
            })

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }

            return await response.json()
        } catch (err) {
            if (err = "Error: 400 Bad Request") {
                break
            } else {
                console.log(`Error to claimTask, ${err}`)
            }
        }
    }
}

const getBooster = async (token) => {
    const url = "https://api.cyberfin.xyz/api/v1/mining/boost/info"

    const headers = {
        'accept': 'application/json',
        'accept-language': 'en-US,en;q=0.9',
        'authorization': `Bearer ${token}`,
        'origin': 'https://g.cyberfin.xyz',
        'priority': 'u=1, i',
        'referer': 'https://g.cyberfin.xyz/',
        'sec-ch-ua': '"Microsoft Edge";v="129", "Not=A?Brand";v="8", "Chromium";v="129", "Microsoft Edge WebView2";v="129"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0'
    }

    while(true) {
        try {
            const response = await fetch(url, {
                method: 'get',
                headers: headers,
            })

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }

            return await response.json()
        } catch (err) {
            console.log(`Error to claimTask, ${err}`)
        }
    }
}

const upBoost = async (token, boostype) => {
    const url = "https://api.cyberfin.xyz/api/v1/mining/boost/apply"

    const payload = JSON.stringify({
        "boostType": boostype
    })

    const headers = {
        'sec-ch-ua': '"Microsoft Edge";v="125", "Chromium";v="125", "Not.A/Brand";v="24", "Microsoft Edge WebView2";v="125"',
        'sec-ch-ua-mobile': '?0',
        'authorization': `Bearer ${token}`,
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Secret-Key': 'cyberfinance',
        'Referer': 'https://g.cyberfin.xyz/',
        'sec-ch-ua-platform': '"Windows"'
    }

    while(true) {
        try {
            const response = await fetch(url, {
                method: 'post',
                headers: headers,
                body: payload
            })

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }

            return await response.json()
        } catch (err) {
            if (err = "Error: 400 Bad Request") {
                break
            } else {
                console.log(`Error to upBoost, ${err}`)
            }
        }
    }
}

const daily = async (token) => {
    const url = "https://api.cyberfin.xyz/api/v1/mining/claim/daily"

    const headers = {
        'accept': 'application/json',
        'accept-language': 'en-US,en;q=0.9',
        'authorization': `Bearer ${token}`,
        'content-length': '0',
        'content-type': 'application/json',
        'origin': 'https://g.cyberfin.xyz',
        'priority': 'u=1, i',
        'referer': 'https://g.cyberfin.xyz/',
        'sec-ch-ua': '"Microsoft Edge";v="129", "Not=A?Brand";v="8", "Chromium";v="129", "Microsoft Edge WebView2";v="129"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0'
    }

    while(true) {
        try {
            const response = await fetch(url, {
                method: 'post',
                headers: headers,
            })

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }

            return await response.json()
        } catch (err) {
            if (err = "Error: 400 Bad Request") {
                break
            } else {
                console.log(`Error to upBoost, ${err}`)
            }
        }
    }
}

// async func to create token
const runCreateToken = async () => {
    try {
        // buat query.txt
        const data = fs.readFileSync('query.txt', 'utf-8');
        const querys = data.split('\n')

        // get token ***GATHER BOOMMM!!!!!
        const tokens = []
        await Promise.all(querys.map(async (query) => {
            const token = await getToken(query)
            const token_access = token.message.accessToken        

            tokens.push(token_access)
        }))
        
        // buat file tokens.txt
        fs.writeFileSync('tokens.txt', "")
        
        // read tokens.txt
        const token = fs.readFileSync('tokens.txt', 'utf-8');

        // append token to token.txt
        for (const token of tokens) {
            // console.log(token)
            fs.appendFileSync('tokens.txt', `${token}\n`)
        }
        return true
    } catch (e) {
        // jika query.txt not exist
        if (e.code == 'ENOENT') {
            console.log('Fill the query.txt first!');
            fs.writeFileSync('query.txt', "query1\nquery2\netc...")
            return false
        } else {
            throw e
        }
    }
}

// async func to countdown
const timeCount = async (finish, nanti, waktu) => {
    for (let i = waktu; i >= 0; i--) {
        // inisiasi menit dan second
        let minutes = Math.floor(waktu/60)
        let seconds = waktu % 60;

        // jika menit dan second < 2 digit
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        // BOOMM tampilkan ******
        process.stdout.write(`Execution time : ${chalk.yellow(finish.toFixed(2))} seconds | Refresh token : ${chalk.yellow(moment.unix(nanti).format("YYYY-MM-DD HH:mm:ss"))} | Refresh after : ${chalk.yellow(`${minutes}:${seconds}`)}`);
        
        // increament - 1
        waktu = waktu-1;

        // blocking delay untuk satu detik
        await new Promise(resolve => setTimeout(resolve, 1000))

        // clear last console log
        if (waktu >= 0) {
            process.stdout.clearLine();
            process.stdout.cursorTo(0); 
        }
    }
}

// async func to sendmessage to telegram
const sendMessage = async (total) => {
    const telegram_token = String(process.env.TELEGRAM_TOKEN)
    const telegram_chatid = String(process.env.TELEGRAM_CHATID)
    const message = `Total cyberfinance : ${total}`
    
    if (telegram_token != "" && telegram_chatid != "") {
        const url = `https://api.telegram.org/bot${telegram_token}/sendMessage?chat_id=${telegram_chatid}&text=${message}`

        while (true) {
            try {
                const response = await fetch(url);

                if (response.status == 200) {
                    // console.log(response.data)
                    return response.json()
                }
            } catch (err) {
                console.log(`Error to sendMessage, ${err}`)
                continue
            }
        }
    } else {
        return
    }
}

// function to count length int
const countLength = (n) => {
    const num = String(n)
    return num.length
}

(async () => {
    // const query = ""

    // clear cli
    console.clear()

    console.log("Create token started")
    const restoken = await runCreateToken()
    if (restoken == true) {
        console.log("Create token success!")
        
        let sekarang = Math.trunc(Date.now()/1000)
        let nanti = Math.trunc(Date.now()/1000) + Number(process.env.REFRESH_TOKEN)

        while (sekarang < nanti) {
            console.log(figlet.textSync('cyberfinance botjs', {font: "Ogre"}), '\n')
            console.log("Auto claim task :", process.env.AUTO_TASKS == "true" ? chalk.green('On') : "Off")
            console.log("Auto upgrade boost :", process.env.AUTO_UPGRADE == "true" ? chalk.green('On') : "Off")
            console.log("")
            let start = Date.now()/1000

            // open tokens.txt
            const data = fs.readFileSync('tokens.txt', 'utf-8')
            const tokens = data.split('\n')
            
            // run all ***GATHER BOOMMM!!!!!
            const runall = await Promise.all(tokens.map(async (token_access, idx) => {
                if (token_access != "") {
                    const info = await getInfo(token_access)
                    if (info.code == 200) {
                        const mininglast = info.message.miningData.lastClaimTime
                        const miningcrack = info.message.miningData.crackTime
                        const balance = info.message.userData.balance
                        const currentdays = info.message.dailyRewardsData.currentDay
                        const isclaimdaily = info.message.dailyRewardsData.isClaimed

                        if(!isclaimdaily) {
                            await daily(token_access)
                        }
                
                        if (Math.trunc(Date.now()/1000) > miningcrack) {
                            await startClaim(token_access)
                        }
                        
                        let completed_task_count = 0
                        if (process.env.AUTO_TASKS == "true") {
                            const tasklist = await getTasks(token_access)
                            if (tasklist.code == 200) {
                                for (const task of tasklist.message) {
                                    if (!task.isCompleted) {
                                        await claimTask(token_access, task.uuid)
                                    } else {
                                        completed_task_count = completed_task_count+1
                                    }
                                } 
                            }
                        }
                        
                        let egglevel = 0
                        let hammerlevel = 0
                        if (process.env.AUTO_UPGRADE == "true") {
                            const getboost = await getBooster(token_access)
                            if (getboost.code == 200) {
                                egglevel = getboost.message.eggLevel
                                hammerlevel = getboost.message.hammerLevel
                                const eggprice = getboost.message.eggPrice
                                const hammerprice = getboost.message.eggPrice
                    
                                if (balance > eggprice || balance > hammerprice) {
                                    await upBoost(token_access, 'HAMMER')
                                    await new Promise(resolve => setTimeout(resolve, 1000))
                                    await upBoost(token_access, 'EGG')
                                }
                            }
                        }

                        const lengcount = countLength(idx)
                        let accnum = lengcount == 1 ? `Account 0${idx+1}` : `Account ${idx+1}`

                        if (accnum === "Account 010") {
                            accnum = "Account 10"
                        }
                        
                        if (process.env.AUTO_TASKS == "true") {
                            console.log(`[${accnum}] | Daily : ${currentdays} | Balance : ${chalk.green(Number(balance).toLocaleString('en-US'))} | Last claim : ${chalk.yellow(moment.unix(mininglast).format("YYYY-MM-DD HH:mm:ss"))} | Crack time : ${chalk.yellow(moment.unix(miningcrack).format("YYYY-MM-DD HH:mm:ss"))} | Task completed : ${completed_task_count > 0 ? chalk.green(completed_task_count) : completed_task_count} | Egg level : ${egglevel > 0 ? chalk.green(egglevel) : egglevel} | Hammer level : ${hammerlevel > 0 ? chalk.green(hammerlevel) : hammerlevel}`)
                        } else {
                            console.log(`[${accnum}] | Daily : ${currentdays} | Balance : ${chalk.green(Number(balance).toLocaleString('en-US'))} | Last claim : ${chalk.yellow(moment.unix(mininglast).format("YYYY-MM-DD HH:mm:ss"))} | Crack time : ${chalk.yellow(moment.unix(miningcrack).format("YYYY-MM-DD HH:mm:ss"))} | Egg level : ${egglevel > 0 ? chalk.green(egglevel) : egglevel} | Hammer level : ${hammerlevel > 0 ? chalk.green(hammerlevel) : hammerlevel}`)
                        }

                        return Math.trunc(balance)
                    } else {
                        console.log(`Failed to get user info!`)
                        return 0
                    }
                }
            }))

            // console.log(runall)

            let totalallacc = 0
            for (let i=0; i < runall.length; i++) {
                if (runall[i] != undefined) {
                    totalallacc = totalallacc + runall[i]
                }
            }

            // delay before next running
            console.log('')
            console.log('Total balance :', chalk.green(totalallacc.toLocaleString('en-US')))

            let finish = (Date.now()/1000)-start

            // printed and blocking
            await timeCount(finish, nanti, Number(process.env.REFRESH_CLAIM)) // blocking/pause for REFRESH_CLAIM seconds

            sekarang = Math.trunc(Date.now()/1000) + Number(process.env.REFRESH_CLAIM)
            if (sekarang >= nanti) {
                console.log("\n")
                console.log("Refresh tokens started!")
                const restoken = await runCreateToken()
                if (restoken == true) {
                    console.log("Refresh tokens success!")
                    await new Promise(resolve => setTimeout(resolve, 2000)) // blocking/pause for 2 seconds
                    await sendMessage(totalallacc.toLocaleString('en-US'))
                    nanti = Math.trunc(Date.now()/1000) + Number(process.env.REFRESH_TOKEN)
                }
            }
                
            console.clear()
        }
    }
})()