const EXERCISE_DATA = {
  program: "Cervicogenic Headache Exercise Protocol",
  disclaimer:
    "Compiled from physiotherapy literature and clinical protocols. Consult a physiotherapist before starting. Stop any exercise that worsens headache or causes sharp/radiating pain.",
  sources: [
    "Physiopedia - Deep Neck Flexor Stabilisation Protocol (Jull et al.)",
    "PMC - Cervicogenic Headaches: An Evidence-Led Approach to Clinical Management (Page, 2011)",
    "PubMed - Effect of neck exercises on cervicogenic headache (Ylinen et al., 2010)",
    "ProResults Physical Therapy - 3 Exercises to Ease Cervicogenic Headaches",
    "Hulst Jepsen Physical Therapy - 5 Exercises for Headaches",
    "Katie E Good DPT - 7 Most Effective Cervicogenic Headache Exercises",
    "Lattimore PT - 5 Exercises for Cervicogenic Headaches",
    "Barrow Neurological Institute - Lewis Headache Center Posture Program",
    "Armor Physical Therapy - Cervicogenic Headache Treatment",
    "Arnold Palmer Hospital - Scapular Stabilization Protocol",
    "UCSF Orthopaedic Institute - Scapular Stabilization Protocol",
    "Hinge Health - Exercises for Cervicogenic Headaches",
  ],
  exercises: [
    {
      id: 1,
      name: "Chin Tucks (Cervical Retraction)",
      type: "Strengthening / Mobility",
      purpose:
        "Strengthen deep cervical flexors (longus colli, longus capitis) and suboccipitals to counteract forward head posture.",
      steps: [
        "Sit or stand upright with good posture.",
        "Keep your eyes level (do NOT look down or up).",
        "Gently glide your head straight back — like sliding a drawer into a cabinet.",
        "Think of making a 'double chin' (not nodding downward).",
        "Hold for 3-5 seconds. You should feel a stretch at the base of your skull.",
        "Relax and return to starting position.",
      ],
      notes:
        "Focus on the horizontal sliding movement. This can be done anywhere (desk, car, standing) to reset your posture.",
      bestTime:
        "Morning, midday desk break, evening. Spread evenly throughout the day.",
      reps: "10 reps",
      freq: "2-3x daily",
      holdSec: 4,
      totalReps: 10,
      sets: 3,
      hasSides: false,
      timesPerDay: 3,
    },
    {
      id: 2,
      name: "Craniocervical Flexion (CCF)",
      type: "Deep Neck Flexor Strengthening / Motor Control",
      purpose:
        "Activate deep neck flexor muscles (longus capitis, longus colli) to support the cervical spine.",
      steps: [
        "Lie on your back with a rolled towel under your neck.",
        "Place your tongue on the roof of your mouth to relax your jaw.",
        "Slowly perform a tiny 'nod' (like saying 'yes') by pivoting your head on the top of your spine.",
        "The back of your head should NOT push down into the towel; it should just rotate.",
        "Hold this micro-nod for 10 seconds, focusing on the front of your throat.",
      ],
      notes:
        "This is a specialized lying-down exercise. Focus on the tiny nodding motion (pivoting) rather than pushing the head down.",
      bestTime:
        "Morning or evening in a quiet setting (requires focus and concentration). Supine position needed.",
      reps: "10 reps",
      freq: "1-2x daily",
      holdSec: 10,
      totalReps: 10,
      sets: 2,
      hasSides: false,
      timesPerDay: 2,
    },
    {
      id: 3,
      name: "Lateral Neck Flexion (Side Neck Stretch)",
      type: "Stretch",
      purpose:
        "Stretch the upper trapezius, scalenes, and lateral cervical muscles to ease tension on the sides of the neck.",
      steps: [
        "Sit upright with your shoulders relaxed and level.",
        "Slowly tilt your ear toward your shoulder while keeping your eyes looking straight ahead.",
        "Do NOT lift your shoulder up to meet your ear; keep it dropped.",
        "Hold for 30 seconds, then repeat on the opposite side.",
      ],
      notes:
        "This is a general mobility stretch for the scalenes. Keep your face pointing forward throughout the movement.",
      bestTime:
        "Morning after waking, midday, and before bed. Especially useful after prolonged sitting.",
      reps: "3 reps each side",
      freq: "2-3x daily",
      holdSec: 30,
      totalReps: 3,
      sets: 1,
      hasSides: true,
      timesPerDay: 3,
    },
    {
      id: 4,
      name: "Neck Rotation Stretch",
      type: "Stretch / Mobility",
      purpose:
        "Improve cervical mobility by stretching the cervical rotators, suboccipitals, SCM, and scalenes.",
      steps: [
        "Sit upright with good posture.",
        "Optional: perform a very slight chin tuck (do NOT force downward tilt).",
        "Slowly turn your head to one side as if looking over your shoulder.",
        "Keep your chin level (do not let it drop).",
        "Hold for 20-30 seconds. Repeat on the other side.",
      ],
      notes:
        "Can use a towel wrapped at the base of the skull for segmental rotation. For added mobilization, perform a chin tuck first, then rotate (McKenzie method).",
      bestTime:
        "Morning, midday, evening. Useful as a warm-up or during desk breaks.",
      reps: "3-5 reps each side",
      freq: "2-3x daily",
      holdSec: 25,
      totalReps: 4,
      sets: 1,
      hasSides: true,
      timesPerDay: 3,
    },
    {
      id: 5,
      name: "Shoulder Blade Squeeze (Scapular Retraction)",
      type: "Strengthening / Postural Endurance",
      purpose:
        "Strengthen rhomboids, middle/lower trapezius, and posterior deltoid to support the neck and correct posture.",
      steps: [
        "Sit or stand upright with arms at your sides.",
        "Squeeze your shoulder blades together and slightly down, as if pinching a pencil between them.",
        "Hold for 3-5 seconds. Do NOT shrug your shoulders up toward your ears.",
        "Keep your chest open and release slowly.",
      ],
      notes:
        "Focus on the lower part of the shoulder blades. Avoid arching your lower back.",
      bestTime:
        "Throughout the day — especially during prolonged sitting. Every 1-2 hours as a posture reset.",
      reps: "10-15 reps",
      freq: "2-3x daily",
      holdSec: 4,
      totalReps: 12,
      sets: 3,
      hasSides: false,
      timesPerDay: 3,
    },
    {
      id: 6,
      name: "Doorway Chest Stretch (Pectoralis Stretch)",
      type: "Stretch",
      purpose:
        "Open pectoralis major/minor and anterior deltoid to counteract the rounded-shoulder component of Upper Crossed Syndrome.",
      steps: [
        "Stand in a doorway with elbows bent at 90 degrees at shoulder height.",
        "Place forearms on the door frame.",
        "Step one foot forward and lean until a gentle stretch is felt across the chest.",
        "Hold for 20-30 seconds, then step back to release.",
      ],
      notes:
        "Addresses the rounded-shoulder component of Upper Crossed Syndrome commonly seen in cervicogenic headache patients.",
      bestTime:
        "Morning and/or evening. Especially important after prolonged desk/computer work.",
      reps: "3 reps",
      freq: "1-2x daily",
      holdSec: 25,
      totalReps: 3,
      sets: 1,
      hasSides: false,
      timesPerDay: 2,
    },
    {
      id: 7,
      name: "Upper Trapezius Stretch (Anchored)",
      type: "Stretch",
      purpose:
        "Stretch the upper trapezius — directly linked to cervicogenic headache tension patterns.",
      steps: [
        "Sit on your right hand (this anchors your shoulder down).",
        "Sit upright with good posture.",
        "Gently tilt your left ear toward your left shoulder.",
        "Keep your face pointing forward (do NOT rotate your head).",
        "Optionally use your left hand for very gentle pressure.",
        "You should feel a stretch along the side of your neck to the shoulder.",
        "Hold for 20-30 seconds, then switch sides.",
      ],
      notes:
        "The anchor is key! Sitting on your hand prevents the shoulder from moving up, which isolates the trapezius muscle fibers.",
      bestTime:
        "Morning, midday desk break, and evening. Anytime you notice upper trap tightness or tension building.",
      reps: "3 reps each side",
      freq: "2-3x daily",
      holdSec: 30,
      totalReps: 3,
      sets: 1,
      hasSides: true,
      timesPerDay: 3,
    },
    {
      id: 8,
      name: "Head Turns with Hand (Isometric Cervical Rotation)",
      type: "Strengthening / Mobility",
      purpose:
        "Strengthen cervical rotators, deep neck muscles, and SCM. Restore neck rotation range of motion.",
      steps: [
        "Sit or stand in a comfortable position.",
        "Place your hand on the side of your head above the ear.",
        "Gently try to turn your head into the hand while the hand provides resistance.",
        "Hold the contraction for 5-10 seconds. Do not use maximum force.",
        "Repeat on the opposite side.",
      ],
      notes:
        "Can also be done as gentle active rotation with hand providing mild overpressure at end range for mobility. Be gentle — cervicogenic headaches can be aggravated by excessive force.",
      bestTime:
        "Morning and evening. Can also serve as a midday desk break exercise.",
      reps: "10 reps each side",
      freq: "2x daily",
      holdSec: 7,
      totalReps: 10,
      sets: 2,
      hasSides: true,
      timesPerDay: 2,
    },
    {
      id: 9,
      name: "Seated Deep Levator Stretch (Levator Scapulae Stretch)",
      type: "Stretch",
      purpose:
        "Reduce tension in the levator scapulae — one of the main muscles associated with cervicogenic headache.",
      steps: [
        "Sit with good posture. Grip the seat of the chair with one hand to anchor the shoulder.",
        "Tuck your chin, then turn your head 45 degrees away from the anchored shoulder.",
        "Look down toward your opposite armpit.",
        "Gently add overpressure with the free hand, pulling the head forward and down.",
        "Hold for 20-30 seconds. Repeat on the other side.",
      ],
      notes:
        "You should feel this stretch along the side and back of the neck down to the shoulder blade.",
      bestTime:
        "Morning and evening. Also helpful during work breaks when neck/shoulder tension builds.",
      reps: "3 reps each side",
      freq: "2-3x daily",
      holdSec: 25,
      totalReps: 3,
      sets: 1,
      hasSides: true,
      timesPerDay: 3,
    },
  ],
  suggested_daily_schedule: {
    morning: {
      time: "7:00-8:00 AM (upon waking or before work)",
      exercises: [
        "Chin Tucks — 3 x 10 reps",
        "Craniocervical Flexion — 1-2 sets x 10 reps (supine)",
        "Lateral Neck Flexion Stretch — 3 x 30s each side",
        "Neck Rotation Stretch — 3 x 20-30s each side",
        "Doorway Chest Stretch — 3 x 30s",
        "Seated Deep Levator Stretch — 3 x 30s each side",
      ],
      approx_duration_minutes: "12-15",
    },
    midday: {
      time: "12:00-1:00 PM (desk break / lunch)",
      exercises: [
        "Chin Tucks — 3 x 10 reps",
        "Shoulder Blade Squeeze — 2 x 15 reps",
        "Seated Trap Stretch — 3 x 30s each side",
        "Seated Deep Levator Stretch — 3 x 30s each side",
      ],
      approx_duration_minutes: "8-10",
    },
    evening: {
      time: "7:00-9:00 PM (post-work / before bed)",
      exercises: [
        "Chin Tucks — 3 x 10 reps",
        "Craniocervical Flexion — 1-2 sets x 10 reps (supine)",
        "Head Turns with Hand — 2 x 10 reps each side",
        "Shoulder Blade Squeeze — 2 x 15 reps",
        "Doorway Chest Stretch — 3 x 30s",
        "Neck Rotation Stretch — 3 x 20-30s each side",
        "Seated Trap Stretch — 3 x 30s each side",
      ],
      approx_duration_minutes: "12-15",
    },
    hourly_micro_breaks: {
      frequency: "Every 1-2 hours during prolonged sitting",
      exercises: [
        "Shoulder Blade Squeeze — 10 reps, 5s hold",
        "Quick Chin Tuck — 5 reps",
      ],
      approx_duration_minutes: "1-2",
    },
  },
  key_research_findings: {
    jull_2002_rct:
      "Jull et al. (2002) randomized controlled trial of 200 cervicogenic headache patients found exercise therapy (CCF + scapular exercises) significantly reduced headache frequency, intensity, and duration. Combined exercise + manipulative therapy was most effective.",
    ylinen_2010_rct:
      "Ylinen et al. (2010) found that strength training combined with stretching reduced cervicogenic headache by 69% at 12-month follow-up, compared to 37% with stretching alone.",
    page_2011_review:
      "Page (2011) evidence-led review in the International Journal of Sports Physical Therapy recommended a multimodal approach: CCF training, upper-quarter stretching, scapular strengthening, and postural re-education.",
    progression_note:
      "Benefits typically appear within 4-6 weeks of consistent daily practice. Full improvement may take 8-12 weeks.",
  },
};
