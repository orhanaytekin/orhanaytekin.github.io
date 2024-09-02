"use client";

import React from 'react';
import DraggableResizableComponent from './DraggableResizableComponent';
import { SOCIALS } from '../constants/socials';

// Move this to a separate file, e.g., src/constants/blogPosts.ts
import { blogPosts } from '../constants/blogPosts';

// Move these to a separate file, e.g., src/constants/uiConstants.ts
import { UI_CONSTANTS } from '../constants/uiConstants';

const BlogSection: React.FC = () => {
  return (
    <section className="grid-container fade-in">
      <DraggableResizableComponent>
        <h2 className={UI_CONSTANTS.SECTION_TITLE_CLASS}>{UI_CONSTANTS.BLOG_SECTION_TITLE}</h2>
      </DraggableResizableComponent>
      {blogPosts.length > 0 ? (
        blogPosts.map((blog) => (
          <DraggableResizableComponent key={blog.id}>
            <div className={UI_CONSTANTS.CARD_CLASS}>
              <h3 className={UI_CONSTANTS.BLOG_TITLE_CLASS}>{blog.title}</h3>
              <p className={UI_CONSTANTS.BLOG_DATE_CLASS}>{blog.date}</p>
              <p className={UI_CONSTANTS.BLOG_DESCRIPTION_CLASS}>{blog.description}</p>
              <a href={blog.link} className={UI_CONSTANTS.BLOG_LINK_CLASS} target="_blank" rel="noopener noreferrer">
                {UI_CONSTANTS.READ_MORE_TEXT}
              </a>
            </div>
          </DraggableResizableComponent>
        ))
      ) : (
        <DraggableResizableComponent>
          <div className={`${UI_CONSTANTS.CARD_CLASS} text-center`}>
            <p className={UI_CONSTANTS.NO_POSTS_MESSAGE_CLASS}>{UI_CONSTANTS.NO_POSTS_MESSAGE}</p>
            <p className={UI_CONSTANTS.FOLLOW_MESSAGE_CLASS}>{UI_CONSTANTS.FOLLOW_MESSAGE}</p>
            <a 
              href={SOCIALS.medium}
              target="_blank" 
              rel="noopener noreferrer" 
              className={UI_CONSTANTS.FOLLOW_BUTTON_CLASS}
            >
              {UI_CONSTANTS.FOLLOW_BUTTON_TEXT}
            </a>
          </div>
        </DraggableResizableComponent>
      )}
    </section>
  );
};

export default BlogSection;