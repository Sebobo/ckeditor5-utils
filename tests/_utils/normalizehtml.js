/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import HtmlDataProcessor from '@ckeditor/ckeditor5-engine/src/dataprocessor/htmldataprocessor';
import { stringify } from '@ckeditor/ckeditor5-engine/src/dev-utils/view';

/**
 * Parses given string of HTML and returns normalized HTML.
 *
 * @param {String} html HTML string to normalize.
 * @returns {String} Normalized HTML string.
 */
export default function normalizeHtml( html ) {
	const processor = new HtmlDataProcessor();
	const parsed = processor.toView( html );

	return stringify( parsed );
}
