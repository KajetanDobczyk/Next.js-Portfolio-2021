import SectionTitle from 'src/components/SectionTitle'
import { sliderSettings, testimonials } from './data'
import * as S from './styles'

const Testimonials = () => (
  <S.TestimonialsWrapper>
    <S.Content>
      <SectionTitle Component="h3">
        What <span>c</span>lients say
      </SectionTitle>
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
                  <span data-content={testimonial.position}>
                    {testimonial.position}
                  </span>
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
