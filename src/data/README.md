# Content Editing Guide

This guide explains how to update the most common website content in [`data.ts`](./data.ts).

## Before You Edit

- Most text and links used across the website are stored in [`data.ts`](./data.ts).
- Update content carefully and keep the existing object structure unchanged.
- If you add or remove list items, make sure commas and brackets stay valid.

## Main Content Areas

### Header and Footer

Edit `layoutData` to update:

- Website name in the header
- Navigation labels and links
- Mobile menu labels and links
- Header call-to-action button
- Footer description
- Footer section links
- Social and contact links

Look for:

- `layoutData.header`
- `layoutData.footer`

### Home Page

Edit `pageData.homePage` to update:

- Activity cards
- Merch cards
- Home page event cards

Look for:

- `activityCards`
- `merchCards`
- `eventDates`

### About Page

Edit `pageData.aboutPage` to update:

- About section cards
- Team and committee member profiles
- Position titles
- Year groupings

Look for:

- `aboutCards`
- `teamAccordion`

### Projects Page

Edit `pageData.projectsPage` to update:

- Project names
- Short subtitles
- Project descriptions
- Project slugs

Important:

- Keep each `slug` unique.
- Slugs are used to match project content and images.

### Sponsors Page

Edit `pageData.sponsorsPage` to update:

- Sponsor names
- Sponsor website links
- Sponsor logo references

### Events Page

Edit `pageData.eventsPage` to update:

- Embedded calendar link
- Upcoming events
- Past event cards

Look for:

- `calendarSrc`
- `eventDates`
- `pastEventDetails`

Important:

- Keep each event `id` unique within its list.
- Keep each past event `slug` accurate, because event gallery images are matched by slug.

### Contacts Page

Edit `pageData.contactsPage` to update:

- Contact links
- Membership form link

Look for:

- `contacts`
- `membershipForm`

## Updating Images

Store new images in the appropriate `src/assets` subfolders.

- Use `src/assets/events` for past event galleries.
- Use `src/assets/media` for general page content.

## Slug-Based Images

Some content uses slugs to match data with images.

For past event galleries:

- Add the event entry in `pastEventDetails`
- Give it a `slug`
- Create or use a folder in `src/assets/events/<slug>/`
- Place that event's images inside that folder

Example:

```text
src/assets/events/aircraft-maintenance-training/
```

For project and page media, follow the existing folder structure under `src/assets/media`.

## Common Update Examples

### Change a committee member name

Go to `pageData.aboutPage`, then find `teamAccordion`, then update the relevant `name` field.

### Add a new upcoming event

Go to `pageData.eventsPage`, find `eventDates`, and add a new event object with:

- `id`
- `title`
- `date`
- `time`
- `link`

### Add a new past event gallery

1. Add a new object to `pastEventDetails`
2. Set a unique `id`
3. Add the event `title`, `date`, `description`, and `slug`
4. Add the event images to `src/assets/events/<slug>/`

### Update the membership form

Go to `pageData.contactsPage` and replace the `membershipForm` URL.

## Notes

- Do not rename top-level objects such as `layoutData` or `pageData`.
- Do not change the shape of existing objects unless the code is also being updated.
- If an image, slug, or link stops working, double-check spelling first.
