import { sliderSettings, testimonials } from './data'
import * as S from './styles'

const Testimonials = () => (
  <S.TestimonialsWrapper>
    <S.Content>
      <S.Title>What clients say about me</S.Title>
    </S.Content>
    <S.TestimonialsSliderWrapper>
      <S.Slider {...sliderSettings}>
        {testimonials.map((testimonial) => (
          <S.Slide key={testimonial.link}>
            <S.SlideContent>"{testimonial.content}"</S.SlideContent>
            <S.Author>
              <S.AuthorImage src={testimonial.image} alt={testimonial.author} />
              <div>
                <S.AuthorName>{testimonial.author}</S.AuthorName>
                <S.AuthorPosition href={testimonial.link} target="_blank">
                  {testimonial.position}
                </S.AuthorPosition>
              </div>
            </S.Author>
            <S.QuoteIcon
              src="/images/quote-icon.svg"
              alt={testimonial.author}
            />
          </S.Slide>
        ))}
      </S.Slider>
    </S.TestimonialsSliderWrapper>
  </S.TestimonialsWrapper>
)

export default Testimonials
