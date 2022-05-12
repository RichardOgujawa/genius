const textarea = document.querySelector('#comment-textarea');

function submitComment(){ 
    var value = textarea.value; 

    if(value != "")
    {

    var comments = document.querySelector('.comments');
    
    var commentContainer = document.createElement('div');
    commentContainer.setAttribute('class', 'comment_container bg-dark grid'); 
    comments.appendChild(commentContainer);

    var commentTopRow = document.createElement('div');
    commentTopRow.setAttribute('class', 'comment_top_row flex');
    commentContainer.appendChild(commentTopRow);

    var profileDetails = document.createElement('div');
    profileDetails.setAttribute('class', 'profile_details flex');
    commentTopRow.appendChild(profileDetails);

    var profilePictureLink = document.createElement('a');
    profilePictureLink.setAttribute('class', 'profile_picture_link');
    profilePictureLink.setAttribute('href', '#');
    profileDetails.appendChild(profilePictureLink);
    
    var profilePictureImg = document.createElement('img'); 
    profilePictureImg.setAttribute('class', 'profile_picture');
    profilePictureImg.setAttribute('src', '../images/profile-pic-1.jpg');
    profilePictureImg.setAttribute('alt', 'Picture of Man with glasses and beard');
    profilePictureLink.appendChild(profilePictureImg);

    var accountName = document.createElement('span');
    accountName.setAttribute('class', 'account_name text-white fs-300');
    accountName.textContent = 'James Raposo';
    profileDetails.appendChild(accountName); 

    //update (have different things like 'just now' '1 min ago' '5 mins ago' etc. come up at different time intervals)
    var timePast = document.createElement('div');
    timePast.setAttribute('class', 'time_past fs-300 text-white');
    timePast.textContent = 'Just now';
    commentTopRow.appendChild(timePast); 
    
    var userComment = document.createElement('p');
    userComment.setAttribute('class', 'user_comment fs-300 text-accent');
    userComment.textContent = value;
    commentContainer.appendChild(userComment);
    
    var upvotesDownvotes = document.createElement('div');
    upvotesDownvotes.setAttribute('class', 'upvotes_downvotes'); 
    commentContainer.appendChild(upvotesDownvotes);

    var upvote = document.createElement('button');
    upvote.setAttribute('class', 'upvote');
    upvote.setAttribute('type', 'button');
    upvotesDownvotes.appendChild(upvote);

    var upvoteIcon = document.createElement('i');
    upvoteIcon.setAttribute('class', 'fa-solid fa-thumbs-up');
    upvote.appendChild(upvoteIcon);
    
    //Generate upvotes based on likes
    var upvotesNum = document.createElement('span');
    upvotesNum.setAttribute('class', 'upvotesNum fs-300 text-gray');
    upvotesNum.textContent = ' +3 upvotes '; 
    upvotesDownvotes.appendChild(upvotesNum);

    var downvote = document.createElement('button');
    downvote.setAttribute('class', 'downvote');
    downvote.setAttribute('type', 'button');
    upvotesDownvotes.appendChild(downvote);

    var downvoteIcon = document.createElement('i');
    downvoteIcon.setAttribute('class', 'fa-solid fa-thumbs-down');
    downvote.appendChild(downvoteIcon);

    comments.appendChild(commentContainer);

    textarea.value = "";
}
else {
    console.log("Nothing");
}
}

