type QuranQuoteProps = {
  arabic: string;
  translation: string;
  reference: string;
  className?: string;
};

export function QuranQuote({ arabic, translation, reference, className = "" }: QuranQuoteProps) {
  return (
    <figure className={`quran-band ${className}`}>
      <blockquote className="quran-text" lang="ar" dir="rtl">
        {arabic}
      </blockquote>
      <figcaption className="quote-copy">
        <p className="quran-translation">“{translation}”</p>
        <cite className="quran-reference">Qur’an · {reference}</cite>
      </figcaption>
    </figure>
  );
}