$(function () {
    $.ajax({
        // url: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-071?Authorization=CWB-8E4B5BC1-A9B4-4252-9AB6-078779ED347F&format=JSON&locationName=%E4%B8%89%E5%B3%BD%E5%8D%80&elementName=T",
        url: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-071?Authorization=CWB-8E4B5BC1-A9B4-4252-9AB6-078779ED347F&format=JSON&locationName=%E4%B8%89%E5%B3%BD%E5%8D%80&elementName=T,Wx",
        type: "GET",
        dataType: "json",
        success: function (response) {
            // console.log(response);
            // console.log(response.records.locations[0].location[0].locationName);
            console.log(response.records);
            let path = response.records.locations[0].location[0];
            $('#city_name').html(response.records.locations[0].locationsName);
            $('#district').html(path.locationName);
            $('#tempture').html(path.weatherElement[0].time[0].elementValue[0].value + "&#176;");
            // let j = 0;
            // for (let i = 0; i < 10; i++) {
            //     if (i % 2 == 0) {
            //         // $('#weekday').find('.block').find('h6')
            //         $('.sub_tempture').eq(j).html(path.weatherElement[0].time[i].elementValue[0].value + "&#176;");
            //         j++;
            //     }
            let j = 0;
            for (let i = 0; i < 10; i++) {
                if (i % 2 == 0) {
                    let wx = path.weatherElement[1].time[i].elementValue[0].value;
                    console.log(wx);
                    if (wx.indexOf('晴') > -1) {
                        $('.block').eq(j).find('img').attr('src', 'https://i.imgur.com/Shrg84B.png');
                    } else if (wx.indexOf('雨') > -1) {
                        $('.block').eq(j).find('img').attr('src', 'img/rain-64.png');
                    } else {
                        $('.block').eq(j).find('img').attr('src', 'https://i.imgur.com/BeWfUuG.png');
                    }
                    $('.sub_tempture').eq(j).html(path.weatherElement[0].time[i].elementValue[0].value + "&#176;");
                    j++;
                }
            }
        },
        error: function () {
            console.log('error');
        }
    })
})//END



// /usr/local/mysql/bin/mysqldump -u root -p --databases 資料庫名稱 > 自訂的檔名.sql
