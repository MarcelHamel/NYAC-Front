import React, { Component } from 'react';
import CategoryPreviewPanel from './CategoryPreviewPanel';
import CategoryPreviewMenu from './CategoryPreviewMenu';

import tours from '../../../images/scroll_banner_images/tours.jpeg'
import active from '../../../images/scroll_banner_images/active.jpeg'
import hiddenspots from '../../../images/scroll_banner_images/hiddenspots.jpeg'
import food from '../../../images/scroll_banner_images/food.jpeg'
import arts from '../../../images/scroll_banner_images/arts.jpeg'
import social from '../../../images/scroll_banner_images/social.jpeg'
import historicsites from '../../../images/scroll_banner_images/historicsites.jpeg'


export default class CategoryPreview extends Component {
  constructor(props) {
    super(props)

    this.state = {
      slides: [
        {
          title: 'TOURS',
          text: 'Get insider access to the best-kept local secrets.',
          image: tours,
          linkTarget: '/categories/Tours',
          linkTitle: 'Tours'
        },
        {
          title: 'ACTIVE',
          text: 'Discover hidden gems through physical exploration.',
          image: active,
          linkTarget: '/categories/Active',
          linkTitle: 'Active'
        },
        {
          title: 'HIDDEN SPOTS',
          text: 'Explore secrets hiding in plain sight.',
          image: hiddenspots,
          linkTarget: '/catgories/Hidden Spots',
          linkTitle: 'Hidden Spots'
        },
        {
          title: 'FOOD',
          text: 'Let your taste buds lead the way.',
          image: food,
          linkTarget: '/categories/Food',
          linkTitle: 'Food'
        },
        {
          title: 'ARTS',
          text: 'Take a closer look at the art influences defining our culture.',
          image: arts,
          linkTarget: '/categories/Arts',
          linkTitle: 'Arts'
        },
        {
          title: 'HISTORIC SITES',
          text: 'Learn about the intricate and sometimes forgotten past of incredible destinations.',
          image: historicsites,
          linkTarget: '/categories/Historic Sites',
          linkTitle: 'Historic Sites'
        },
        {
          title: 'SOCIAL',
          text: 'Get social with our community, which includes everyone from recent NYC transplants to lifelong residents.',
          image: social,
          linkTarget: '/categories/Social',
          linkTitle: 'Social'
        }
      ],
      currentSlideIndex: 0,
      currentSlide: {
        title: 'TOURS',
        text: 'Get insider access to the best-kept local secrets.',
        image: tours,
        linkTarget: '/categories/Tours',
        linkTitle: 'Tours'
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
