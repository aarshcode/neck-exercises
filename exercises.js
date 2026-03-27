const EXERCISE_DATA = {
  "program": "Cervicogenic Headache Exercise Protocol",
  "disclaimer": "Compiled from physiotherapy literature and clinical protocols. Consult a physiotherapist before starting. Stop any exercise that worsens headache or causes sharp/radiating pain.",
  "sources": [
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
    "Hinge Health - Exercises for Cervicogenic Headaches"
  ],
  "exercises": [
    {
      "id": 1,
      "name": "Chin Tucks (Cervical Retraction)",
      "type": "Strengthening / Mobility",
      "purpose": "Strengthen deep cervical flexors (longus colli, longus capitis) and suboccipitals to counteract forward head posture.",
      "steps": [
        "Sit, stand, or lie on your back with a rolled towel under the neck (supine is easiest for beginners).",
        "Keeping your jaw relaxed, glide your chin straight back in the horizontal plane — like making a double chin.",
        "Hold for 3-5 seconds. Do NOT flex chin to chest — translate head straight back.",
        "Relax and return to starting position."
      ],
      "notes": "Can be done seated, standing, or supine. Supine is easiest for beginners. Do NOT flex chin to chest — translate head straight back in the horizontal plane.",
      "bestTime": "Morning, midday desk break, evening. Spread evenly throughout the day.",
      "reps": "10 reps",
      "freq": "2-3x daily",
      "holdSec": 4,
      "totalReps": 10,
      "sets": 3,
      "hasSides": false,
      "timesPerDay": 3
    },
    {
      "id": 2,
      "name": "Craniocervical Flexion (CCF)",
      "type": "Deep Neck Flexor Strengthening / Motor Control",
      "purpose": "Activate deep neck flexor muscles (longus capitis, longus colli) to support the cervical spine.",
      "steps": [
        "Lie on your back with a rolled towel under your neck.",
        "Slowly nod your head as if saying \"yes\" in slow motion — a gentle upper cervical nod.",
        "Keep the movement small and controlled. Do not lift your head off the surface.",
        "Hold for 10 seconds, then return to starting position with control.",
        "Focus on engaging deep muscles without activating superficial neck muscles (SCM)."
      ],
      "notes": "Ideally done with pressure biofeedback unit (Stabilizer) starting at 20 mmHg, progressing in 2 mmHg increments to 30 mmHg. Without biofeedback, focus on gentle upper neck nod without engaging superficial neck muscles (SCM). Progress slowly over weeks.",
      "bestTime": "Morning or evening in a quiet setting (requires focus and concentration). Supine position needed.",
      "reps": "10 reps",
      "freq": "1-2x daily",
      "holdSec": 10,
      "totalReps": 10,
      "sets": 2,
      "hasSides": false,
      "timesPerDay": 2
    },
    {
      "id": 3,
      "name": "Lateral Neck Flexion Stretch",
      "type": "Stretch",
      "purpose": "Stretch the upper trapezius, scalenes, and lateral cervical muscles to ease tension on the sides of the neck.",
      "steps": [
        "Sit upright. Grip the seat of the chair with one hand to anchor the shoulder down.",
        "Slowly tilt your ear toward the opposite shoulder — do not rotate your head, keep eyes forward.",
        "Hold for 30 seconds.",
        "Lift back to centre and repeat on the other side."
      ],
      "notes": "Grip the seat of a chair with the opposite hand to anchor the shoulder down for a deeper stretch. Do NOT rotate head — keep eyes forward.",
      "bestTime": "Morning after waking, midday, and before bed. Especially useful after prolonged sitting.",
      "reps": "3 reps each side",
      "freq": "2-3x daily",
      "holdSec": 30,
      "totalReps": 3,
      "sets": 1,
      "hasSides": true,
      "timesPerDay": 3
    },
    {
      "id": 4,
      "name": "Neck Rotation Stretch",
      "type": "Stretch / Mobility",
      "purpose": "Improve cervical mobility by stretching the cervical rotators, suboccipitals, SCM, and scalenes.",
      "steps": [
        "Sit upright.",
        "For added mobilization, perform a chin tuck first (cervical retraction + rotation per McKenzie method).",
        "Slowly turn your head to one side until a gentle stretch is felt.",
        "Hold for 20-30 seconds.",
        "Return to centre and repeat on the other side."
      ],
      "notes": "Can use a towel wrapped at the base of the skull for segmental rotation. For added mobilization, perform a chin tuck first, then rotate (McKenzie method).",
      "bestTime": "Morning, midday, evening. Useful as a warm-up or during desk breaks.",
      "reps": "3-5 reps each side",
      "freq": "2-3x daily",
      "holdSec": 25,
      "totalReps": 4,
      "sets": 1,
      "hasSides": true,
      "timesPerDay": 3
    },
    {
      "id": 5,
      "name": "Shoulder Blade Squeeze (Scapular Retraction)",
      "type": "Strengthening / Postural Endurance",
      "purpose": "Strengthen rhomboids, middle/lower trapezius, and posterior deltoid to support the neck and correct posture.",
      "steps": [
        "Sit or stand upright with arms at your sides.",
        "Squeeze your shoulder blades together as if pinching a pencil between them.",
        "Hold for 3-5 seconds. Do NOT shrug shoulders upward.",
        "Keep abs engaged. Release slowly."
      ],
      "notes": "An endurance exercise — higher reps with good form are more beneficial than fewer heavy reps. Can add resistance band for progression. Do NOT shrug shoulders upward.",
      "bestTime": "Throughout the day — especially during prolonged sitting. Every 1-2 hours as a posture reset.",
      "reps": "10-15 reps",
      "freq": "2-3x daily",
      "holdSec": 4,
      "totalReps": 12,
      "sets": 3,
      "hasSides": false,
      "timesPerDay": 3
    },
    {
      "id": 6,
      "name": "Doorway Chest Stretch (Pectoralis Stretch)",
      "type": "Stretch",
      "purpose": "Open pectoralis major/minor and anterior deltoid to counteract the rounded-shoulder component of Upper Crossed Syndrome.",
      "steps": [
        "Stand in a doorway with elbows bent at 90 degrees at shoulder height.",
        "Place forearms on the door frame.",
        "Step one foot forward and lean until a stretch is felt across the chest.",
        "Hold for 20-30 seconds, then step back to release."
      ],
      "notes": "Addresses the rounded-shoulder component of Upper Crossed Syndrome commonly seen in cervicogenic headache patients.",
      "bestTime": "Morning and/or evening. Especially important after prolonged desk/computer work.",
      "reps": "3 reps",
      "freq": "1-2x daily",
      "holdSec": 25,
      "totalReps": 3,
      "sets": 1,
      "hasSides": false,
      "timesPerDay": 2
    },
    {
      "id": 7,
      "name": "Seated Trap Stretch (Upper Trapezius Stretch)",
      "type": "Stretch",
      "purpose": "Stretch the upper trapezius — directly linked to cervicogenic headache tension patterns.",
      "steps": [
        "Sit with good posture. Place one hand behind your back.",
        "Use the opposite hand to gently pull your head toward the opposite shoulder.",
        "Do NOT rotate head — feel the stretch on the side of the neck.",
        "Hold for 30 seconds. Return to centre and repeat on the other side."
      ],
      "notes": "Each side counts as one rep. Do NOT rotate head.",
      "bestTime": "Morning, midday desk break, and evening. Anytime you notice upper trap tightness or tension building.",
      "reps": "3 reps each side",
      "freq": "2-3x daily",
      "holdSec": 30,
      "totalReps": 3,
      "sets": 1,
      "hasSides": true,
      "timesPerDay": 3
    },
    {
      "id": 8,
      "name": "Head Turns with Hand (Isometric Cervical Rotation)",
      "type": "Strengthening / Mobility",
      "purpose": "Strengthen cervical rotators, deep neck muscles, and SCM. Restore neck rotation range of motion.",
      "steps": [
        "Sit or stand in a comfortable position.",
        "Place hand on the side of your head.",
        "Gently turn head into the hand while the hand provides resistance (isometric).",
        "Hold for 5-10 seconds.",
        "Return to centre, pause, then repeat on the opposite side."
      ],
      "notes": "Can also be done as gentle active rotation with hand providing mild overpressure at end range for mobility. Be gentle — cervicogenic headaches can be aggravated by excessive force.",
      "bestTime": "Morning and evening. Can also serve as a midday desk break exercise.",
      "reps": "10 reps each side",
      "freq": "2x daily",
      "holdSec": 7,
      "totalReps": 10,
      "sets": 2,
      "hasSides": true,
      "timesPerDay": 2
    },
    {
      "id": 9,
      "name": "Seated Deep Levator Stretch (Levator Scapulae Stretch)",
      "type": "Stretch",
      "purpose": "Reduce tension in the levator scapulae — one of the main muscles associated with cervicogenic headache.",
      "steps": [
        "Sit with good posture. Place one hand on the same-side shoulder blade.",
        "Tuck your chin, then turn your head to the opposite side.",
        "Look down toward the opposite armpit.",
        "Use the free hand to gently add overpressure pulling the head forward and down.",
        "Hold for 20-30 seconds. Return to centre and repeat on the other side."
      ],
      "notes": "You should feel a deep stretch at the base of the neck/top of the shoulder blade. Each side counts as one rep.",
      "bestTime": "Morning and evening. Also helpful during work breaks when neck/shoulder tension builds.",
      "reps": "3 reps each side",
      "freq": "2-3x daily",
      "holdSec": 25,
      "totalReps": 3,
      "sets": 1,
      "hasSides": true,
      "timesPerDay": 3
    }
  ],
  "suggested_daily_schedule": {
    "morning": {
      "time": "7:00-8:00 AM (upon waking or before work)",
      "exercises": [
        "Chin Tucks — 3 x 10 reps",
        "Craniocervical Flexion — 1-2 sets x 10 reps (supine)",
        "Lateral Neck Flexion Stretch — 3 x 30s each side",
        "Neck Rotation Stretch — 3 x 20-30s each side",
        "Doorway Chest Stretch — 3 x 30s",
        "Seated Deep Levator Stretch — 3 x 30s each side"
      ],
      "approx_duration_minutes": "12-15"
    },
    "midday": {
      "time": "12:00-1:00 PM (desk break / lunch)",
      "exercises": [
        "Chin Tucks — 3 x 10 reps",
        "Shoulder Blade Squeeze — 2 x 15 reps",
        "Seated Trap Stretch — 3 x 30s each side",
        "Seated Deep Levator Stretch — 3 x 30s each side"
      ],
      "approx_duration_minutes": "8-10"
    },
    "evening": {
      "time": "7:00-9:00 PM (post-work / before bed)",
      "exercises": [
        "Chin Tucks — 3 x 10 reps",
        "Craniocervical Flexion — 1-2 sets x 10 reps (supine)",
        "Head Turns with Hand — 2 x 10 reps each side",
        "Shoulder Blade Squeeze — 2 x 15 reps",
        "Doorway Chest Stretch — 3 x 30s",
        "Neck Rotation Stretch — 3 x 20-30s each side",
        "Seated Trap Stretch — 3 x 30s each side"
      ],
      "approx_duration_minutes": "12-15"
    },
    "hourly_micro_breaks": {
      "frequency": "Every 1-2 hours during prolonged sitting",
      "exercises": [
        "Shoulder Blade Squeeze — 10 reps, 5s hold",
        "Quick Chin Tuck — 5 reps"
      ],
      "approx_duration_minutes": "1-2"
    }
  },
  "key_research_findings": {
    "jull_2002_rct": "Jull et al. (2002) randomized controlled trial of 200 cervicogenic headache patients found exercise therapy (CCF + scapular exercises) significantly reduced headache frequency, intensity, and duration. Combined exercise + manipulative therapy was most effective.",
    "ylinen_2010_rct": "Ylinen et al. (2010) found that strength training combined with stretching reduced cervicogenic headache by 69% at 12-month follow-up, compared to 37% with stretching alone.",
    "page_2011_review": "Page (2011) evidence-led review in the International Journal of Sports Physical Therapy recommended a multimodal approach: CCF training, upper-quarter stretching, scapular strengthening, and postural re-education.",
    "progression_note": "Benefits typically appear within 4-6 weeks of consistent daily practice. Full improvement may take 8-12 weeks."
  }
};
