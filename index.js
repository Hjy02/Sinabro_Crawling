const axios = require("axios");
const cheerio = require("cheerio");

const getHTML = async(keyword) => {
    try {
        return await axios.get("https://dept.bc.ac.kr/computer-software/community/office.do?mode=view&articleNo=" + encodeURI(keyword) + "&article.offset=0&articleLimit=10")
    }catch(err){
        console.log(err); //에러 씹기
    }
}

const parsing = async (keyword) => {
    const html = await getHTML(keyword);
    const $ = cheerio.load(html.data);
    const $boxList = $(".b-title-box");

    let box = [];
    $boxList.each((index,node) => {
        const title = $(node).find(".b-title").text();
        box.push({
            title:$(node).find(".b-title").text(),
            
        })
    });

    console.log(box);
}
parsing("33607");
parsing("33213");
parsing("32691");
parsing("32627");
