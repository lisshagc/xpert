$(document).ready(function () {

    ShowhideType();

    $("#VideoUrlValue").on("input", function () {
        //alert($(this).val());
        var param = getUrlParameter($(this).val(), 'v');
        var url = "https://www.youtube.com/embed/" + param;
        $('#abc_frame').attr('src', url)
    });

    $("#txtBlogUrl").on("input", function () {
        //alert($(this).val());
        loadRssFeed($(this).val());
    });

});

function ShowhideType() {
    $('#dvtxtArea').hide();
    $('#dvBlogUrl').hide();
    $('#dvFileAudio').hide();
    $('#dvFileVideo').hide();
    $('#dvVideoUrl').hide();
    $('#uploadfile').hide();
    showCourseType($('#CourseTypeId').val());
}

document.addEventListener('DOMContentLoaded', function () {
    $('#CourseTypeId').on("change", function () {
        // Hide all input fields initially
        $('#dvtxtArea').hide();
        $('#dvBlogUrl').hide();
        $('#dvFileAudio').hide();
        $('#dvFileVideo').hide();
        $('#dvVideoUrl').hide();

        // Show the corresponding input field based on the selected option
        var selectedOption = $(this).val();
        showCourseType(selectedOption);
    });
});

function showCourseType(type) {
    if (type === '1' || type === '6') {
        $('#dvtxtArea').show();
    } else if (type === '2') {
        $('#dvBlogUrl').show();
    } else if (type === '3') {
        $('#dvVideoUrl').show();
    } else if (type === '4') {
        $('#dvFileAudio').show();
    } else if (type === '5') {
        $('#dvFileVideo').show();
    }
}

function getUrlParameter(url, name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(url);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function loadRssFeed(rssUrl) {

    // Clear previous content
    $('#rssContainer').empty();

    // Fetch and parse the RSS feed
    $.ajax({
        url: 'https://api.rss2json.com/v1/api.json',
        method: 'GET',
        dataType: 'json',
        data: {
            rss_url: rssUrl
        },
        success: function (data) {
            // Display each item from the RSS feed
            data.items.forEach(function (item) {
                $('#rssContainer').append('<div><h3>' + item.title + '</h3><p>' + item.description + '</p></div>');
            });
        },
        error: function () {
            $('#rssContainer').append('<p>Error loading RSS feed.</p>');
        }
    });
}

