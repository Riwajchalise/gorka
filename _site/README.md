# Jekyll Website Setup and Run Guide

## Prerequisites

Before you start, ensure you have the following installed on your system:

- **Ruby** (>= 2.5.0) – Check with `ruby -v`
- **Bundler** – Install it with `gem install bundler`
- **Jekyll** – Install it with `gem install jekyll`

## Installation

1. **Clone the repository** (if applicable):
   ```sh
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install dependencies**:
   ```sh
   bundle install
   ```

## Running the Jekyll Server

To start the Jekyll server, run:

```sh
bundle exec jekyll serve
```

By default, the site will be available at:

```
http://localhost:4000
```

You can specify a custom port if needed:

```sh
bundle exec jekyll serve --port 5000
```

## Building the Site for Production

To generate the static site for deployment, run:

```sh
bundle exec jekyll build
```

This will create the static site inside the `_site` directory.

## Configuration

- The main configuration file is **_config.yml**
- To build with a different configuration file:
  ```sh
  bundle exec jekyll build --config _config.yml,_config_prod.yml
  ```

## Deployment

You can deploy the generated `_site` folder to any static hosting service, such as:

- [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages)
- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [AWS S3](https://aws.amazon.com/s3/)

For GitHub Pages, push your code to a `gh-pages` branch and enable GitHub Pages in your repository settings.

## Troubleshooting

- If you encounter errors, try updating dependencies:
  ```sh
  bundle update
  ```
- Check for missing dependencies:
  ```sh
  bundle check
  ```
- Clear Jekyll caches if necessary:
  ```sh
  jekyll clean
  ```

## Additional Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Guide](https://docs.github.com/en/pages/getting-started-with-github-pages)

---


