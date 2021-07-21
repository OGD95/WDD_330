var apiCall = "https://api.nytimes.com/svc/movies/v2/";
var apiKey = "api-key=NtR9GJslZsBu0WNtsdMBOaveAUafOzrm";
var getReviewsQuery = apiCall + "reviews/search.json?";
let innerHtml = '';
let tableInnerHtml = document.getElementById('reviewsTable');
let tableHeader = document.getElementById('tableHeader');
let errorMessage = document.getElementById('errorMessage');
let queryParameters = '';



function getCriticPicks(){
    var criticPicksQuery = "reviews/search.json?critics-pick=Y";
    fetch(apiCall + criticPicksQuery + "&" + apiKey, {
        "method": "GET"
    })
    .then(result => result.json())
    .then(reviews => {
        innerHtml = '';

        tableHeader.innerHTML = "<th>Film Title</th><th>Rating</th><th>Critic Name</th><th>Review Summary</th><th>Link to Full Review</th>"

        for (const review of reviews.results) {
            innerHtml += buildReviewTable(review);
        }
        
        tableInnerHtml.innerHTML = innerHtml;

    }).catch(error => {console.error(error);})
    
}

function getCriticNames(){
    var criticNamesQuery = "critics/all.json?";
    fetch(apiCall + criticNamesQuery + apiKey, {
        "method": "GET"
    })
    .then(result => result.json())
    .then(reviews => {
        innerHtml = '';

        tableHeader.innerHTML = "<th>Critic Name</th><th>Employment Status</th><th>Bio (When Available)</th>"

        for (const review of reviews.results) {
            innerHtml += buildCriticNameTable(review);
        }
        
        tableInnerHtml.innerHTML = innerHtml;
    })
    .catch(error => {console.error(error);})
}

function getReviews(){
    var rangeQuery;
    var keywordQuery;
    var criticNameQuery;
    queryParameters = '';
    getReviewsQuery = apiCall + "reviews/search.json?";

    var keyword = document.getElementById("reviewsContaining").value.replaceAll(" ", "%20");
    
    if (keyword != ""){
        keywordQuery = "query=" + keyword + "&";
        queryParameters += keywordQuery;
    }
    
    var startDate = document.getElementById("startDate").value;
    var endDate = document.getElementById("endDate").value;

    if (startDate != ""){
        rangeQuery = "opening-date=" + startDate;
        if(endDate == ""){
            rangeQuery += "&"
            queryParameters += rangeQuery;
        }        
    }
    
    if (startDate != "" && endDate != ""){
        rangeQuery += ":" + endDate + "&";
        queryParameters += rangeQuery; 
    }
    
    var criticName = document.getElementById("criticName").value.replaceAll(" ", "%20");
    if (criticName != ""){
        criticNameQuery = "reviewer=" + criticName + "&";
        queryParameters += criticNameQuery;
    }

    getReviewsQuery += queryParameters;
    
    console.log(getReviewsQuery + apiKey);

    fetch(getReviewsQuery + apiKey, {
        "method": "GET"
    })
    .then(result => result.json())
    .then(reviews => {
        innerHtml = '';
        errorMessage.innerHTML = '';

        tableHeader.innerHTML = "<th>Film Title</th><th>Rating</th><th>Critic Name</th><th>Review Summary</th><th>Link to Full Review</th>"

        for (const review of reviews.results) {
            innerHtml += buildReviewTable(review);
        }
        
        tableInnerHtml.innerHTML = innerHtml;

    })
    .catch(error => {
        console.error(error);
        tableInnerHtml.innerHTML = '';
        tableHeader.innerHTML = '';
        errorMessage.innerHTML = "<b>*No Results Found, Try Adjusting the Search Parameters</b>"
    })
}

function constructQuery(parameter){
    console.log(parameter);
    if (parameter == ""){
        return;
    } else if(parameter != "" && num == 0){
        getReviewsQuery + parameter;
        return;
    } else{
        getReviewsQuery + "&" + parameter;
    }
}

function buildReviewTable(value){
    return `<tr id='reviewRow'>
        <td>${value.display_title}</td><br>
        <td>${value.mpaa_rating}</td><br>
        <td>${value.byline}</td><br>
        <td>${value.headline} \n ${value.summary_short}</td>
        <td><a href="${value.link.url}">Full Review</a></td>
    </tr>`
}

function buildCriticNameTable(value){
    return `<tr id='criticInfoRow>
        <td>${value.display_name}</td><br>
        <td>${value.status}</td><br>
        <td>${value.bio}</td><br>
        </tr>`
}
