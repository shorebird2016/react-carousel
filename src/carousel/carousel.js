//carousel component
import React from 'react';
import './main.css';
import Slide1 from '../asset/slide1.png';
import Slide2 from '../asset/slide2.png';
import Slide3 from '../asset/slide3.png';
import Slide4 from '../asset/slide4.png';

export default class Carousel extends React.Component {
   //keep data structures in repo object
   constructor() {
      super();//must use this
      this.repo = {
         slideImages: [Slide1, Slide2, Slide3, Slide4], //TODO how to pass into this class from outside
         switchInterval: 5000, //ms
         currentIndex: 0, //track current image
      };

      //keep this as main style for container of all images
      this.styleSlider = {//make sure quotes are used for values
         display: 'flex',
         position: 'relative',
         width: '400%',
         left: '0',
         alignItems: 'flex-end',
         transition: 'left 1s ease-in-out 0.1s'//not easeInOut
      };

      //trigger render() inherently when internal value changes
      this.state = {
         left_position: '0%'
      };

      //make sure this method binds to class
      this.timerExpire = this.timerExpire.bind(this);
      this.showImage = this.showImage.bind(this);
   }

   //framework callback
   componentWillMount() {//start timer to slide every x seconds
      this.timerId = setInterval(this.timerExpire, this.repo.switchInterval);
   }
   componentWillUnmount() {
      this.timerId.clearInterval();
      console.log("carousel timer cancelled....");
   }

   //handles timer expiration, can not call this with anomonous function inside setInterval since this will be lost
   timerExpire() {
      this.next();
   }

   //show next image
   next() {
      let cur_idx = this.repo.currentIndex;
      if (cur_idx === this.repo.slideImages.length - 1) cur_idx = 0;//start over
      else cur_idx++;
      this.repo.currentIndex = cur_idx;//update repo

      //change left attribute by x percent
      let pct = cur_idx * (-100) + '%';
      this.setState({left_position: pct});
   }

   //show prev image
   prev() {
      let cur_idx = this.repo.currentIndex;
      if (cur_idx === 0) cur_idx = this.repo.slideImages.length - 1;//to the last
      else cur_idx--;
      this.repo.currentIndex = cur_idx;

      //change left attribute by x percent
      let pct = cur_idx * (-100) + '%';
      this.setState({left_position: pct});
   }

   showImage(event) {//use target to find index to images
      // console.log(event.target.dataset.index);
      this.repo.currentIndex = event.target.dataset.index;
console.log(this.repo.currentIndex);
      let pct = this.repo.currentIndex * (-100) + '%';
      this.setState({left_position: pct});
      this.hideFocus();
   }
   //hide button focus after click TODO for circles
   hideFocus = () => { console.log("Hiding focus.....") };

   render() {
      //get style delta, apply inline
      this.styleSlider.left = this.state.left_position;

      //a list of small circles
      let circles = [];

      //build a image list for rendering
      let img_array = [];
      for (let idx = 0; idx < this.repo.slideImages.length; idx++) {
         img_array.push(<img src={this.repo.slideImages[idx]} className="slide-image" alt="slide" key={idx}/>);
         circles.push(<button className="circle" onClick={this.showImage.bind(this)} key={idx}
            data-index={idx}/>);//ok use same key, use data-index such that event can see button position
      }

      return (
         <div>
            <h1 className="header-div">A React Carousel Component</h1>
            <div className='carousel'>
               <div style={this.styleSlider}> {img_array} </div>

               {/*left and right nav buttons*/}
               <span id="nav-next" onClick={this.next.bind(this)}>&#8678;</span>
               <span id="nav-prev" onClick={this.prev.bind(this)}>&#8680;</span>

               {/*small circle buttons to nav directly, great syntax*/}
               <div className="circle-box">{circles}</div>
            </div>

         </div>
      )
   }
}
/*
  Notes about things learned
    ==> when trying to combine className and style for old slider-box
        className="slider-box" style={{left_style}} does not work together for some reason
        had to make a new prop obj this.styleSlider in CTOR() to hold the whole thing
        and modify just the "left" field in this object when user clicks next/prev buttons
  TODO: got some warning about mutating style
        Warning: `div` was passed a style object that has previously been mutated.
        Mutating `style` is deprecated. Consider cloning it beforehand.
        Check the `render` of `Carousel`.
        Previous style: {display: "flex", position: "relative", width: "400%",
            left: "0%", alignItems: "flex-end", transition: "left 1s ease-in-out 0.1s"}
        Mutated style: {display: "flex", position: "relative", width: "400%",
            left: "-100%", alignItems: "flex-end", transition: "left 1s ease-in-out 0.1s"}

   TODO: provide external interface for x number of images to slide, x seconds delay between images
 */
