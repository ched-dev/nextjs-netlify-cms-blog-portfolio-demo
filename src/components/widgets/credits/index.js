import Control from './CreditsControl'
import Preview from './CreditsPreview'

const schema = {
  properties: {
    separator: { type: 'string' },
  }
}

export default { Control, Preview, schema }