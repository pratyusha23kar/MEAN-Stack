import { Component } from "@angular/core";


@Component({
  selector: 'app-post-create',
  templateUrl:'./post-create.component.html'
})
export class PostCreateComponent{
  enteredValue = '';
  newPost='No Content';


  //onAddPost(postInput : HTMLTextAreaElement){
    //console.log(postInput);
    // alert("Post is added!");
    //this.newPost = postInput.value;

    onAddPost(){
      this.newPost = this.enteredValue;
    }

  }

