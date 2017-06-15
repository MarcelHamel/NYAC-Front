import React, { Component } from 'react';
import CategoryPreviewPanel from './CategoryPreviewPanel';
import CategoryPreviewMenu from './CategoryPreviewMenu';

export default class CategoryPreview extends Component {
  constructor(props) {
    super(props)

    this.state = {
      slides: [
        {
          title: 'TOURS',
          text: 'Our knowledgeable guides will provide you with all the information you need to know about NYC\'s hidden.',
          image: '../../../images/scroll_banner_images/tours.jpeg',
          linkTarget: '#',
          linkTitle: 'Tour Events'
        },
        {
          title: 'ACTIVITIES',
          text: 'Join the hike through abandoned grounds.',
          image: '../../../images/scroll_banner_images/activities.jpeg',
          linkTarget: '#',
          linkTitle: 'Activities'
        },
        {
          title: 'HIDDEN SPOTS',
          text: 'Explore the abandoned areas of NYC',
          image: '../../../images/scroll_banner_images/hidden-spots.jpeg',
          linkTarget: '#',
          linkTitle: 'Hidden Spots'
        },
        {
          title: 'FOOD',
          text: 'Let your taste buds do the walking in our Lower East Side food tour.',
          image: '../../../images/scroll_banner_images/food.jpeg',
          linkTarget: '#',
          linkTitle: 'Food Events'
        },
        {
          title: 'ARTS',
          text: 'Take a closer look at the city\'s greatest art influences and layered history.',
          image: '../../../images/scroll_banner_images/arts.jpeg',
          linkTarget: '#',
          linkTitle: 'Arts Events'
        },
        {
          title: 'HISTORIC SITES',
          text: 'Explore New York City\'s intricate and sometimes forgotten past.',
          image: '../../../images/scroll_banner_images/historic-sites.jpeg',
          linkTarget: '#',
          linkTitle: 'Historic Sites'
        },
        {
          title: 'SOCIAL',
          text: 'Get social with people from all walks of life in our variety of speakeasy\'s.',
          image: '../../../images/scroll_banner_images/social.jpeg',
          linkTarget: '#',
          linkTitle: 'Social Events'
        }
      ],
      currentSlideIndex: 0,
      currentSlide: {
        title: 'TOURS',
        text: 'Our knowledgeable guides will provide you with all the information you need to know about NYC\'s hidden.',
        image: '../../../images/scroll_banner_images/tours.jpeg',
        linkTarget: '#',
        linkTitle: 'Tour Events'
      }
    }
  }

  selectCategoryPreview(e) {
    let newActiveCategory = parseInt(e.target.getAttribute('id').match(/\d/));
    this.setState({
      currentSlideIndex: newActiveCategory,
      currentSlide: this.state.slides[newActiveCategory]
    });
  }

  categoryScrollLeft() {
    let newIndex = this.state.currentSlideIndex === 0 ? this.state.slides.length - 1 : this.state.currentSlideIndex - 1;
    this.setState({
      currentSlideIndex: newIndex,
      currentSlide: this.state.slides[newIndex]
    });
  }

  categoryScrollRight() {
    let newIndex = this.state.currentSlideIndex === this.state.slides.length - 1 ? 0 : this.state.currentSlideIndex + 1;
    this.setState({
      currentSlideIndex: newIndex,
      currentSlide: this.state.slides[newIndex]
    });
  }

  render() {
    return (
    <section id="category-preview">
      <CategoryPreviewMenu categories={this.state.slides} current={this.state.currentSlideIndex} selectCategoryPreview={this.selectCategoryPreview.bind(this)}/>
      <CategoryPreviewPanel slide={this.state.currentSlide} scrollLeft={this.categoryScrollLeft.bind(this)} scrollRight={this.categoryScrollRight.bind(this)} />
    </section>
    )
  }
}
