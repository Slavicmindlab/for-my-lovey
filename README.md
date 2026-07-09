# For My Lovey

This folder contains the finished surprise website.

It is a static website, which means it does not need installation, a backend, a database, or a paid server. You can open it on your computer first, personalize it, then upload it to GitHub Pages to get a link to send her.

## What Is In This Folder

- `index.html` is the page content: postcard text, photo slots, her universe section, and games.
- `styles.css` is the design: colors, layout, postcard, magazine cover, mobile layout.
- `script.js` is the interaction: postcard flip, fortunes, butterfly game, love meter, runway brief generator.
- `assets/fairy-garden-postcard.png` is the generated fairy garden artwork used at the top of the site.
- `assets/kitty.jpg`, `assets/dark_r.jpg`, and `assets/mcr.jpg` are the three personal photos already used in the gallery.
- `README.md` is this instruction file.

## Step 1: Preview The Website On Your Computer

Do this before uploading anything.

1. Open the folder:
   `C:\Users\Tommy\OneDrive\Documents\Smth for my Lovey`
2. Find `index.html`.
3. Double-click `index.html`.
4. It should open in your browser.
5. Click around and check:
   - The postcard opens and flips.
   - The mini games work.
   - The page feels right for her.
   - The text does not say anything you want to change.

If the page opens and looks good, continue.

## Step 2: Check The Photos

The site already uses these three photos:

- `assets/kitty.jpg`
- `assets/dark_r.jpg`
- `assets/mcr.jpg`

To check them:

1. Open `index.html`.
2. Scroll to `Pieces of us`.
3. Make sure the three photos appear.

Only use the steps below if you want to replace the photos later.

1. Pick 3 photos of you two.
2. Rename them to simple file names:
   - `photo-1.jpg`
   - `photo-2.jpg`
   - `photo-3.jpg`
3. Put those photos inside the `assets` folder.
4. Open `index.html`.
5. Find this first placeholder:

```html
<div class="photo-placeholder">Add photo 1</div>
```

6. Replace it with:

```html
<img src="assets/photo-1.jpg" alt="Us together">
```

7. Replace the second placeholder:

```html
<div class="photo-placeholder">Add photo 2</div>
```

with:

```html
<img src="assets/photo-2.jpg" alt="Us together">
```

8. Replace the third placeholder:

```html
<div class="photo-placeholder">Add photo 3</div>
```

with:

```html
<img src="assets/photo-3.jpg" alt="Us together">
```

9. Save `index.html`.
10. Double-click `index.html` again and check that the photos appear.

Important: the photo file names in `index.html` must match the real file names exactly.

## Step 3: Change The Romantic Text

Only do this if you want the message to sound more like you.

1. Open `index.html`.
2. To change the postcard message, search for:

```html
Dear Lovey,
```

3. Edit the text below it.
4. To change the final message, search for:

```html
One last thing
```

5. Edit the paragraph below it.
6. Save `index.html`.
7. Open `index.html` in your browser again and read it like she will read it.

## Step 4: Change Her Personality Section

The `Her universe` section is where her specific interests are included:

- Pilates
- Gym
- Matcha
- Dark romance
- Chase Atlantic
- Fashion
- VOGUE editor/designer dream

To edit it:

1. Open `index.html`.
2. Search for:

```html
Her universe
```

3. Edit any of the cards under that section.
4. Save the file.
5. Open `index.html` again to check it.

## Step 5: Edit The Mini Game Messages

The mini games use text from `script.js`.

1. Open `script.js`.
2. To edit the fortune messages, search for:

```js
const fortunes = [
```

3. Change the messages inside the quotes.
4. To edit the fashion prompt generator, search for:

```js
const briefs = [
```

5. Change the messages inside the quotes.
6. Save `script.js`.
7. Open `index.html` again and test the buttons.

Important: keep the quotation marks and commas. For example:

```js
"Your new custom message goes here.",
```

## Step 6: Final Check Before Uploading

Before you upload the site, check this:

1. Open `index.html` in your browser.
2. Scroll from top to bottom.
3. Click `Open your postcard`.
4. Click the postcard.
5. Click `Seal it with a kiss`.
6. Click the matcha fortune button.
7. Play the butterfly game.
8. Click the love meter.
9. Click the runway brief button.
10. Check the photos.
11. Read every romantic message out loud once.

If everything looks good, upload it.

## Step 7: Create A GitHub Account Or Sign In

1. Go to [GitHub](https://github.com).
2. Sign in.
3. If you do not have an account, create one.

## Step 8: Create A New GitHub Repository

1. On GitHub, click the `+` button in the top right.
2. Click `New repository`.
3. For `Repository name`, write something simple, for example:

```text
for-my-lovey
```

4. Set the repository to `Public`.
5. Do not worry about the other settings.
6. Click `Create repository`.

## Step 9: Upload The Website Files To GitHub

After the repository is created:

1. Click `uploading an existing file`.
2. Open this folder on your computer:

```text
C:\Users\Tommy\OneDrive\Documents\Smth for my Lovey
```

3. Drag these files into GitHub:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
4. Also drag the full `assets` folder into GitHub.
5. Wait until GitHub finishes uploading.
6. Scroll down to `Commit changes`.
7. In the message box, write:

```text
Add surprise website
```

8. Click `Commit changes`.

## Step 10: Turn On GitHub Pages

1. In your GitHub repository, click `Settings`.
2. In the left sidebar, click `Pages`.
3. Under `Build and deployment`, find `Source`.
4. Choose `Deploy from a branch`.
5. Under `Branch`, select:
   - Branch: `main`
   - Folder: `/root`
6. Click `Save`.

## Step 11: Wait For The Website Link

1. Stay on the GitHub Pages screen.
2. Wait about 1 to 5 minutes.
3. Refresh the page if needed.
4. GitHub should show a link that looks like:

```text
https://yourusername.github.io/for-my-lovey/
```

5. Click the link and test the live website.

## Step 12: Send It To Her

Only send the link after you test it yourself.

1. Open the GitHub Pages link.
2. Check the website on your phone.
3. Check that the photos load.
4. Check that the postcard and games work.
5. Send her the link.

Suggested message:

```text
I made you something. Open this when you have a quiet minute 💗
```

## If Something Goes Wrong

If photos do not show:

- Check that the photos are inside the `assets` folder.
- Check that the file names match exactly.
- Check whether the file is `.jpg`, `.jpeg`, or `.png`.

If the GitHub Pages link gives a 404:

- Wait a few more minutes.
- Go back to `Settings` > `Pages`.
- Make sure the branch is `main`.
- Make sure the folder is `/root`.
- Make sure `index.html` is uploaded to the main folder, not hidden inside another folder.

If you edit files after uploading:

1. Go to the GitHub repository.
2. Click the file you want to edit.
3. Click the pencil icon.
4. Make the change.
5. Click `Commit changes`.
6. Wait a minute.
7. Refresh the live website.
