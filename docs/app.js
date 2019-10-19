/**
 * Created by rajansingh on 20/09/19 **
 **/


(function () {
    const json = [{
        "videoId": "9YDmerRVYTA",
        "title": "Job Satisfaction | Private vs Government vs Business | Career Select",
    },{
        "videoId": "jlNXY6OYpMQ",
        "title": "ISRO Scientist | (Eligibility/Salary/Growth/Life) | Career Select",
    },
        {
        "videoId": "zd5Vui0Ilik",
        "title": "How to become an IAS Officer  | UPSC Civil Services | Career Select",
    },
        {
            "videoId": "zlWzZaXRcCY",
            "title": "How to become a Commercial Pilot | DGCA | Career Select",
        },
        {
            "videoId": "jRzR4b78dSc",
            "title": "TTE in Railways | TTE | TC | Career Select",
        },
        {
            "videoId": "sVl4XNW1bco",
            "title": "IT Job | Frontend Developer | UI Developer | Career Select",
        },
        {
            "videoId": "YNpzHvuswek",
            "title": "Merchant Navy | (Eligibility/Exam/Salary/Growth )| IMU CET | Career Select",
        },
        {
            "videoId": "1dmBFJC1xhc",
            "title": "How to become a CA ( Chartered Accountant ) | ICAI | Career Select",
        },
        {
            "videoId": "U8b9MuH6wLI",
            "title": "Assistant Loco Pilot | RRB ALP | Career Select",
        },
        {
            "videoId": "B54MG0W73OY",
            "title": "Government teacher Job | TET | CTET | Career Select",
        },
        {
            "videoId": "mLDhCr83r5g",
            "title": "IES | ESE | (Eligibility/Salary/Growth/Life)  | Career Select",
        },
        {
            "videoId": "0zv5FF4f00g",
            "title": "NDA Exams | India Army/Navy/AirForce | UPSC NDA | SSB | Career Select",
        },
        {
            "videoId": "59daKI04nNo",
            "title": "How to become Postman (Eligibility/Salary/Growth) | Indian Post | Career Select",
        },
        {
            "videoId": "8BNxF4xyzcQ",
            "title": "Air Hostess | Steward | Cabin Crew (Qualification/Salary/Growth/Life) | Career Select",
        },
        {
            "videoId": "CK4zWadgi-Q",
            "title": "Sub Inspector(SI) | ( Min Qualification | Exam | Salary | Growth)  | Career Select",
        },
        {
            "videoId": "X0aWnFSUlqM",
            "title": "Bank PO (Eligibility | Syllabus | Exam | Salary | Growth ) | Career Select",
        },];
    let html = '';
    json.forEach(function (item) {
        html += `
  <a href='https://www.youtube.com/watch?v=${item.videoId}'>
  <figure>
    <img class="video_thumb" src='https://i.ytimg.com/vi/${item.videoId}/mqdefault.jpg' alt="${item.title}"/>
    <figcaption>${item.title}</figcaption>
  </figure></a>`;

    });
    document.getElementById('careerselect').innerHTML = html;

})();
