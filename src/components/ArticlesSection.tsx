import React from "react";
import AnimatedSection from "./AnimatedSection";

interface Article {
  title: string;
  text: string;
  img: string;
  imgPosition: string;
  animationClass: string;
  textWidth: number;
  imgWidth: number;
}

interface ArticlesSectionProps {
  articles: Article[];
}

const ArticlesSection: React.FC<ArticlesSectionProps> = ({ articles }) => {
  return (
    <div className="px-20 pb-32">
      {articles.map((article, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center gap-8 mb-12 ${
            article.imgPosition === "left" ? "md:flex-row-reverse" : ""
          }`}
        >
          <div style={{ width: `${article.imgWidth}%` }}>
            <AnimatedSection animationClass={article.animationClass}>
              <img src={article.img} alt={`Article ${index + 1}`} />
            </AnimatedSection>
          </div>
          <div style={{ width: `${article.textWidth}%` }}>
            <AnimatedSection animationClass="animate-slide-in-right">
              <p className="text-2xl font-semibold">{article.title}</p>
              <p className="mt-4">{article.text}</p>
            </AnimatedSection>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticlesSection;
