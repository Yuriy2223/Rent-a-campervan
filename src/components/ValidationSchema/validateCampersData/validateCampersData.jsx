export const validateCampersData = (data) => {
  return data.every(
    (camber) =>
      camber._id &&
      camber.name &&
      camber.price &&
      camber.rating &&
      camber.location &&
      camber.adults !== undefined &&
      camber.children !== undefined &&
      camber.engine &&
      camber.transmission &&
      camber.form &&
      camber.length &&
      camber.width &&
      camber.height &&
      camber.tank &&
      camber.consumption &&
      camber.description &&
      camber.details &&
      typeof camber.details === "object" &&
      camber.gallery &&
      Array.isArray(camber.gallery) &&
      camber.reviews &&
      Array.isArray(camber.reviews) &&
      camber.reviews.every(
        (review) =>
          review.reviewer_name &&
          review.reviewer_rating !== undefined &&
          review.comment
      )
  );
};
