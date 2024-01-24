export = sanitizeHtml;
declare function sanitizeHtml(html: any, options: any, _recursing: any): string;
declare namespace sanitizeHtml {
    namespace defaults {
        let allowedTags: string[];
        let nonBooleanAttributes: string[];
        let disallowedTagsMode: string;
        namespace allowedAttributes {
            let a: string[];
            let img: string[];
        }
        let allowedEmptyAttributes: string[];
        let selfClosing: string[];
        let allowedSchemes: string[];
        let allowedSchemesByTag: {};
        let allowedSchemesAppliedToAttributes: string[];
        let allowProtocolRelative: boolean;
        let enforceHtmlBoundary: boolean;
        let parseStyleAttributes: boolean;
    }
    function simpleTransform(newTagName: any, newAttribs: any, merge: any): (tagName: any, attribs: any) => {
        tagName: any;
        attribs: any;
    };
}
