//Find post edit form
let postEditForm = document.getElementById('postEditForm');

//Add submit listener to post edit form
postEditForm.addEventListener('submit', function(event) {
  //Find length of uploaded images
let imageUploads = document.getElementById('imageUpload').files.length;
  //Find total number of existing images
let existingImgs = document.querySelectorAll('.imageDelCheckbox').length;
    //Fnd total number of potential deletions
let imgDeletion = document.querySelectorAll('.imageDelCheckbox:checked').length;
  //Figure out if the form can be submitted or not
let newTotal = existingImgs - imgDeletion + imageUploads;
if (newTotal > 4) {
    event.preventDefault();
    let removalAmt = newTotal - 4;
    alert(
        `You need to remove at least ${removalAmt} (more) image${
        removalAmt === 1 ? '' : 's'
        }!`
    );
    }
});

