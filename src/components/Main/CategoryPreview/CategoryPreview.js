import React, { Component } from 'react';
import CategoryPreviewPanel from './CategoryPreviewPanel';
import CategoryPreviewMenu from './CategoryPreviewMenu';

import tours from '../../../images/scroll_banner_images/tours.jpeg'
import active from '../../../images/scroll_banner_images/active.jpeg'
import hiddenspots from '../../../images/scroll_banner_images/hiddenspots.jpeg'
import food from '../../../images/scroll_banner_images/food.jpeg'
import arts from '../../../images/scroll_banner_images/arts.jpeg'
import historicsites from '../../../images/scroll_banner_images/historicsites.jpeg'
import social from '../../../images/scroll_banner_images/social.jpeg'


export default class CategoryPreview extends Component {
  constructor(props) {
    super(props)

    this.state = {
      slides: [
        {
          title: 'TOURS',
          text: 'Our knowledgeable guides will provide you with all the information you need to know about NYC\'s hidden.',
          image: tours,
          linkTarget: '/categories/Tours',
          linkTitle: 'Tour Experiences'
        },
        {
          title: 'ACTIVE',
          text: 'Join the hike through abandoned grounds.',
          image: active,
          linkTarget: '/categories/Active',
          linkTitle: 'Active'
        },
        {
          title: 'HIDDEN SPOTS',
          text: 'Explore the abandoned areas of NYC',
          image: hiddenspots,
          linkTarget: '/catgories/Hidden Spots',
          linkTitle: 'Hidden Spots'
        },
        {
          title: 'FOOD',
          text: 'Let your taste buds do the walking in our Lower East Side food tour.',
          image: food,
          linkTarget: '/categories/Food',
          linkTitle: 'Food Experiences'
        },
        {
          title: 'ARTS',
          text: 'Take a closer look at the city\'s greatest art influences and layered history.',
          image: arts,
          linkTarget: '/categories/Arts',
          linkTitle: 'Arts Experiences'
        },
        {
          title: 'HISTORIC SITES',
          text: 'Explore New York City\'s intricate and sometimes forgotten past.',
          image: historicsites,
          linkTarget: '/categories/Historic Sites',
          linkTitle: 'Historic Sites'
        },
        {
          title: 'SOCIAL',
          text: 'Get social with people from all walks of life in our variety of speakeasy\'s.',
          image: social,
          linkTarget: '/categories/Social',
          linkTitle: 'Social Experiences'
        }
      ],
      currentSlideIndex: 0,
      currentSlide: {
        title: 'TOURS',
        text: 'Our knowledgeable guides will provide you with all the information you need to know about NYC\'s hidden.',
        image: tours,
        linkTarget: '/categories/Tours',
        linkTitle: 'Tour Experiences'
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
