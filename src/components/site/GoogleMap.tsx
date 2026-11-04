/* Live Google Maps embed of the dealership (lazy-loaded, so it never
   slows the page down) - Centaurus Mall, Blue Area, Islamabad. */
export default function GoogleMap({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-[18px] border border-line shadow-card ${className}`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5986877846543!2d73.04764837651036!3d33.70772297328607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfa247849e7b%3A0x6b8dd7561f0ef5b9!2sThe%20Centaurus%20Mall!5e0!3m2!1sen!2spk!4v1710000000000!5m2!1sen!2spk"
        className="block h-full w-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        title="Centaurus Mall, Blue Area, Islamabad on Google Maps"
      />
    </div>
  );
}
