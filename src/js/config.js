//console.log(process.env.NODE_ENV);
export default {
    test: (process.env.NODE_ENV === 'dev'),
    citiesUrl: 'https://applehail.ru/getcity/?q=',
    defaultCities: [
        {
            "id": "0c5b2444-70a0-4932-980c-b4dc0d3f02b5",
            "text": "г Москва",
            "region": "Москва"
        }, {
            "id": "c2deb16a-0330-4f05-821f-1d09c93331e6",
            "text": "г Санкт-Петербург",
            "region": "Санкт-Петербург"
        }, {
            "id": "555e7d61-d9a7-4ba6-9770-6caa8198c483",
            "text": "г Нижний-Новгород",
            "region": "Нижегородская"
        }, {
            "id": "93b3df57-4c89-44df-ac42-96f05e9cd3b9",
            "text": "г Казань",
            "region": "Татарстан"
        }
    ]
}