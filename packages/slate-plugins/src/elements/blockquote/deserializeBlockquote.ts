import { DeserializeHtml } from '@udecode/core';
import { getElementDeserializer } from '../../common/utils/getElementDeserializer';
import { BLOCKQUOTE, BlockquoteDeserializeOptions } from './types';

export const deserializeBlockquote = ({
  typeBlockquote = BLOCKQUOTE,
}: BlockquoteDeserializeOptions = {}): DeserializeHtml => ({
  element: getElementDeserializer(typeBlockquote, { tagNames: ['BLOCKQUOTE'] }),
});
