import Script from "next/script";

const FORM_ID = "QhtQjzZnP2JFGLI3WUlx";
const FORM_NAME = "Website Form (Law Offices of David P. Kashani)";
/** The vendor's measured height. Holds the space until form_embed.js sizes the iframe to its content. */
const FORM_HEIGHT = 516;

/**
 * Case review form, hosted by CaseClimb and embedded as an iframe. Fields,
 * consent wording, the thank-you message and where submissions go are all
 * managed in the CaseClimb form builder, not in this codebase.
 *
 * The data attributes are read by form_embed.js, which also resizes the
 * iframe as the form grows (validation errors, narrow screens). Keep them as
 * the vendor wrote them.
 */
export function CaseReviewForm() {
  return (
    <>
      <iframe
        src={`https://services.caseclimb.com/widget/form/${FORM_ID}`}
        style={{ width: "100%", height: FORM_HEIGHT, border: "none", borderRadius: 10 }}
        id={`inline-${FORM_ID}`}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={FORM_NAME}
        data-height={FORM_HEIGHT}
        data-layout-iframe-id={`inline-${FORM_ID}`}
        data-form-id={FORM_ID}
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title={FORM_NAME}
      />
      <Script src="https://services.caseclimb.com/js/form_embed.js" strategy="afterInteractive" />
    </>
  );
}
