import ReactSocialMediaButtons from 'react-social-media-buttons'

import theme from 'src/theme'

import { socialLinks } from './data'
import * as S from './styles'

const SocialMediaButtons = () => (
  <S.SocialMediaButtonsWrapper>
    <ReactSocialMediaButtons
      links={socialLinks}
      iconStyle={{
        color: theme.color.text,
      }}
      openNewTab={true}
    />
  </S.SocialMediaButtonsWrapper>
)

export default SocialMediaButtons
