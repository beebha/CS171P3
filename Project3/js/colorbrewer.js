  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>d3/lib/colorbrewer/colorbrewer.js at master · mbostock/d3 · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <link rel="xhr-socket" href="/_sockets">
    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="zFbjZ38T7oyOhlhaf6GHrqwlLvgp6WuSX8bccOG7snk=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-202e33a586eb990be0ca930957d0d26c9d440e4b.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-f76d0e0736a101c35f22cff55e3d523192129437.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-92d138f450f2960501e28397a2f63b0f100590f0.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-8a7a6bbea43a415b1152a73a9c2c372101f2f118.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="67d2bfe05f2443ad1e45d007dfcfc65c">

        <link data-pjax-transient rel='permalink' href='/mbostock/d3/blob/9f25c5f55efba145fb3e47ef7cf5f3c99d42ed58/lib/colorbrewer/colorbrewer.js'>
    <meta property="og:title" content="d3"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/mbostock/d3"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/005a27e09fe946ebef64bf4d134efc0a?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="d3 - A JavaScript visualization library for HTML and SVG."/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="mbostock/d3"/>

    <meta name="description" content="d3 - A JavaScript visualization library for HTML and SVG." />

  <link href="https://github.com/mbostock/d3/commits/master.atom" rel="alternate" title="Recent Commits to d3:master" type="application/atom+xml" />

  </head>


  <body class="logged_out page-blob macintosh vis-public env-production  ">
    <div id="wrapper">

      

      
      
      

      
      <div class="header header-logged-out">
  <div class="container clearfix">

      <a class="header-logo-wordmark" href="https://github.com/">Github</a>

    <div class="header-actions">
        <a class="button primary" href="https://github.com/signup">Sign up for free</a>
      <a class="button" href="https://github.com/login?return_to=%2Fmbostock%2Fd3%2Fblob%2Fmaster%2Flib%2Fcolorbrewer%2Fcolorbrewer.js">Sign in</a>
    </div>

      <ul class="top-nav">
          <li class="explore"><a href="https://github.com/explore">Explore GitHub</a></li>
        <li class="search"><a href="https://github.com/search">Search</a></li>
        <li class="features"><a href="https://github.com/features">Features</a></li>
          <li class="blog"><a href="https://github.com/blog">Blog</a></li>
      </ul>

  </div>
</div>


      

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu ">
          <div class="container">
            <div class="title-actions-bar">
              


<ul class="pagehead-actions">



    <li>
      <a href="/login?return_to=%2Fmbostock%2Fd3"
        class="minibutton js-toggler-target star-button entice tooltipped upwards"
        title="You must be signed in to use this feature" rel="nofollow">
        <span class="mini-icon mini-icon-star"></span>Star
      </a>
      <a class="social-count js-social-count" href="/mbostock/d3/stargazers">
        14,473
      </a>
    </li>
    <li>
      <a href="/login?return_to=%2Fmbostock%2Fd3"
        class="minibutton js-toggler-target fork-button entice tooltipped upwards"
        title="You must be signed in to fork a repository" rel="nofollow">
        <span class="mini-icon mini-icon-fork"></span>Fork
      </a>
      <a href="/mbostock/d3/network" class="social-count">
        2,517
      </a>
    </li>
</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-icon mega-icon-public-repo"></span>
                <span class="author vcard">
                  <a href="/mbostock" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">mbostock</span>
                  </a></span> /
                <strong><a href="/mbostock/d3" class="js-current-repository">d3</a></strong>
              </h1>
            </div>

            
  <ul class="tabs">
      <li class="pulse-nav"><a href="/mbostock/d3/pulse" highlight="pulse" rel="nofollow"><span class="mini-icon mini-icon-pulse"></span></a></li>
    <li><a href="/mbostock/d3" class="selected" highlight="repo_source repo_downloads repo_commits repo_tags repo_branches">Code</a></li>
    <li><a href="/mbostock/d3/network" highlight="repo_network">Network</a></li>
    <li><a href="/mbostock/d3/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>44</span></a></li>

      <li><a href="/mbostock/d3/issues" highlight="repo_issues">Issues <span class='counter'>130</span></a></li>

      <li><a href="/mbostock/d3/wiki" highlight="repo_wiki">Wiki</a></li>


    <li><a href="/mbostock/d3/graphs" highlight="repo_graphs repo_contributors">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/mbostock/d3/tags" class="tabnav-tab" highlight="repo_tags">Tags <span class="counter ">134</span></a></li>
    </ul>
    
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="master">
        <span class="mini-icon mini-icon-branch"></span>
        <i>branch:</i>
        <span class="js-select-button">master</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">

        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div>
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="branches">

            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/adopt/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="adopt" rel="nofollow" title="adopt">adopt</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/fix-centroid/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="fix-centroid" rel="nofollow" title="fix-centroid">fix-centroid</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/fix-interpolate/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="fix-interpolate" rel="nofollow" title="fix-interpolate">fix-interpolate</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/fix-null-geometry/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="fix-null-geometry" rel="nofollow" title="fix-null-geometry">fix-null-geometry</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/geo-bounds/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="geo-bounds" rel="nofollow" title="geo-bounds">geo-bounds</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/gh-pages/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="gh-pages" rel="nofollow" title="gh-pages">gh-pages</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/grayscale/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="grayscale" rel="nofollow" title="grayscale">grayscale</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target selected">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/master/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/node-size/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="node-size" rel="nofollow" title="node-size">node-size</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/quadtree-extent/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="quadtree-extent" rel="nofollow" title="quadtree-extent">quadtree-extent</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/resample-min/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="resample-min" rel="nofollow" title="resample-min">resample-min</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/time/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="time" rel="nofollow" title="time">time</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/time-bst/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="time-bst" rel="nofollow" title="time-bst">time-bst</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/translate-extent/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="translate-extent" rel="nofollow" title="translate-extent">translate-extent</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/tween/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="tween" rel="nofollow" title="tween">tween</a>
                </div> <!-- /.select-menu-item -->
            </div>

              <div class="select-menu-no-results">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="tags">
            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v3.1.5/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.1.5" rel="nofollow" title="v3.1.5">v3.1.5</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v3.1.4/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.1.4" rel="nofollow" title="v3.1.4">v3.1.4</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v3.1.3/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.1.3" rel="nofollow" title="v3.1.3">v3.1.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v3.1.2/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.1.2" rel="nofollow" title="v3.1.2">v3.1.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v3.1.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.1.1" rel="nofollow" title="v3.1.1">v3.1.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v3.1.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.1.0" rel="nofollow" title="v3.1.0">v3.1.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v3.0.8/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.0.8" rel="nofollow" title="v3.0.8">v3.0.8</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v3.0.7/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.0.7" rel="nofollow" title="v3.0.7">v3.0.7</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v3.0.6/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.0.6" rel="nofollow" title="v3.0.6">v3.0.6</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v3.0.5/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.0.5" rel="nofollow" title="v3.0.5">v3.0.5</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v3.0.4/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.0.4" rel="nofollow" title="v3.0.4">v3.0.4</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v3.0.3/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.0.3" rel="nofollow" title="v3.0.3">v3.0.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v3.0.2/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.0.2" rel="nofollow" title="v3.0.2">v3.0.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v3.0.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.0.1" rel="nofollow" title="v3.0.1">v3.0.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v3.0.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.0.0" rel="nofollow" title="v3.0.0">v3.0.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.10.3/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.10.3" rel="nofollow" title="v2.10.3">v2.10.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.10.2/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.10.2" rel="nofollow" title="v2.10.2">v2.10.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.10.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.10.1" rel="nofollow" title="v2.10.1">v2.10.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.10.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.10.0" rel="nofollow" title="v2.10.0">v2.10.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.9.7/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.9.7" rel="nofollow" title="v2.9.7">v2.9.7</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.9.6/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.9.6" rel="nofollow" title="v2.9.6">v2.9.6</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.9.5/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.9.5" rel="nofollow" title="v2.9.5">v2.9.5</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.9.4/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.9.4" rel="nofollow" title="v2.9.4">v2.9.4</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.9.3/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.9.3" rel="nofollow" title="v2.9.3">v2.9.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.9.2/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.9.2" rel="nofollow" title="v2.9.2">v2.9.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.9.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.9.1" rel="nofollow" title="v2.9.1">v2.9.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.9.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.9.0" rel="nofollow" title="v2.9.0">v2.9.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.8.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.8.1" rel="nofollow" title="v2.8.1">v2.8.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.8.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.8.0" rel="nofollow" title="v2.8.0">v2.8.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.7.5/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.7.5" rel="nofollow" title="v2.7.5">v2.7.5</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.7.4/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.7.4" rel="nofollow" title="v2.7.4">v2.7.4</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.7.3/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.7.3" rel="nofollow" title="v2.7.3">v2.7.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.7.2/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.7.2" rel="nofollow" title="v2.7.2">v2.7.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.7.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.7.1" rel="nofollow" title="v2.7.1">v2.7.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.7.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.7.0" rel="nofollow" title="v2.7.0">v2.7.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.6.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.6.1" rel="nofollow" title="v2.6.1">v2.6.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.6.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.6.0" rel="nofollow" title="v2.6.0">v2.6.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.5.2/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.5.2" rel="nofollow" title="v2.5.2">v2.5.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.5.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.5.1" rel="nofollow" title="v2.5.1">v2.5.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.5.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.5.0" rel="nofollow" title="v2.5.0">v2.5.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.4.6/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.4.6" rel="nofollow" title="v2.4.6">v2.4.6</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.4.5/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.4.5" rel="nofollow" title="v2.4.5">v2.4.5</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.4.4/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.4.4" rel="nofollow" title="v2.4.4">v2.4.4</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.4.3/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.4.3" rel="nofollow" title="v2.4.3">v2.4.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.4.2/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.4.2" rel="nofollow" title="v2.4.2">v2.4.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.4.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.4.1" rel="nofollow" title="v2.4.1">v2.4.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.4.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.4.0" rel="nofollow" title="v2.4.0">v2.4.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.3.4/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.3.4" rel="nofollow" title="v2.3.4">v2.3.4</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.3.3/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.3.3" rel="nofollow" title="v2.3.3">v2.3.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.3.2/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.3.2" rel="nofollow" title="v2.3.2">v2.3.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.3.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.3.1" rel="nofollow" title="v2.3.1">v2.3.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.3.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.3.0" rel="nofollow" title="v2.3.0">v2.3.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.2.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.2.1" rel="nofollow" title="v2.2.1">v2.2.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.2.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.2.0" rel="nofollow" title="v2.2.0">v2.2.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.1.3/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.1.3" rel="nofollow" title="v2.1.3">v2.1.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.1.2/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.1.2" rel="nofollow" title="v2.1.2">v2.1.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.1.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.1.1" rel="nofollow" title="v2.1.1">v2.1.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.1.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.1.0" rel="nofollow" title="v2.1.0">v2.1.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.0.4/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.0.4" rel="nofollow" title="v2.0.4">v2.0.4</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.0.3/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.0.3" rel="nofollow" title="v2.0.3">v2.0.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.0.2/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.0.2" rel="nofollow" title="v2.0.2">v2.0.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.0.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.0.1" rel="nofollow" title="v2.0.1">v2.0.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v2.0.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.0.0" rel="nofollow" title="v2.0.0">v2.0.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.29.7/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.29.7" rel="nofollow" title="v1.29.7">v1.29.7</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.29.6/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.29.6" rel="nofollow" title="v1.29.6">v1.29.6</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.29.5/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.29.5" rel="nofollow" title="v1.29.5">v1.29.5</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.29.4/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.29.4" rel="nofollow" title="v1.29.4">v1.29.4</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.29.3/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.29.3" rel="nofollow" title="v1.29.3">v1.29.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.29.2/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.29.2" rel="nofollow" title="v1.29.2">v1.29.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.29.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.29.1" rel="nofollow" title="v1.29.1">v1.29.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.29.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.29.0" rel="nofollow" title="v1.29.0">v1.29.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.28.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.28.1" rel="nofollow" title="v1.28.1">v1.28.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.28.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.28.0" rel="nofollow" title="v1.28.0">v1.28.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.27.2/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.27.2" rel="nofollow" title="v1.27.2">v1.27.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.27.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.27.1" rel="nofollow" title="v1.27.1">v1.27.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.27.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.27.0" rel="nofollow" title="v1.27.0">v1.27.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.26.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.26.0" rel="nofollow" title="v1.26.0">v1.26.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.25.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.25.0" rel="nofollow" title="v1.25.0">v1.25.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.24.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.24.1" rel="nofollow" title="v1.24.1">v1.24.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.24.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.24.0" rel="nofollow" title="v1.24.0">v1.24.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.23.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.23.0" rel="nofollow" title="v1.23.0">v1.23.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.22.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.22.1" rel="nofollow" title="v1.22.1">v1.22.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.22.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.22.0" rel="nofollow" title="v1.22.0">v1.22.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.21.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.21.0" rel="nofollow" title="v1.21.0">v1.21.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.20.3/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.20.3" rel="nofollow" title="v1.20.3">v1.20.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.20.2/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.20.2" rel="nofollow" title="v1.20.2">v1.20.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.20.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.20.1" rel="nofollow" title="v1.20.1">v1.20.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.20.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.20.0" rel="nofollow" title="v1.20.0">v1.20.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.19.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.19.1" rel="nofollow" title="v1.19.1">v1.19.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.19.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.19.0" rel="nofollow" title="v1.19.0">v1.19.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.18.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.18.0" rel="nofollow" title="v1.18.0">v1.18.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.17.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.17.1" rel="nofollow" title="v1.17.1">v1.17.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.17.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.17.0" rel="nofollow" title="v1.17.0">v1.17.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.16.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.16.0" rel="nofollow" title="v1.16.0">v1.16.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.15.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.15.1" rel="nofollow" title="v1.15.1">v1.15.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.15.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.15.0" rel="nofollow" title="v1.15.0">v1.15.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.14.2/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.14.2" rel="nofollow" title="v1.14.2">v1.14.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.14.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.14.1" rel="nofollow" title="v1.14.1">v1.14.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.14.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.14.0" rel="nofollow" title="v1.14.0">v1.14.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.13.4/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.13.4" rel="nofollow" title="v1.13.4">v1.13.4</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.13.3/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.13.3" rel="nofollow" title="v1.13.3">v1.13.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.13.2/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.13.2" rel="nofollow" title="v1.13.2">v1.13.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.13.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.13.1" rel="nofollow" title="v1.13.1">v1.13.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.13.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.13.0" rel="nofollow" title="v1.13.0">v1.13.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.12.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.12.0" rel="nofollow" title="v1.12.0">v1.12.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.11.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.11.1" rel="nofollow" title="v1.11.1">v1.11.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.11.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.11.0" rel="nofollow" title="v1.11.0">v1.11.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.10.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.10.1" rel="nofollow" title="v1.10.1">v1.10.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.10.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.10.0" rel="nofollow" title="v1.10.0">v1.10.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.9.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.9.1" rel="nofollow" title="v1.9.1">v1.9.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.9.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.9.0" rel="nofollow" title="v1.9.0">v1.9.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.8.5/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.8.5" rel="nofollow" title="v1.8.5">v1.8.5</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.8.4/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.8.4" rel="nofollow" title="v1.8.4">v1.8.4</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.8.3/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.8.3" rel="nofollow" title="v1.8.3">v1.8.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.8.2/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.8.2" rel="nofollow" title="v1.8.2">v1.8.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.8.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.8.1" rel="nofollow" title="v1.8.1">v1.8.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.8.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.8.0" rel="nofollow" title="v1.8.0">v1.8.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.7.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.7.0" rel="nofollow" title="v1.7.0">v1.7.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.6.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.6.1" rel="nofollow" title="v1.6.1">v1.6.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.6.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.6.0" rel="nofollow" title="v1.6.0">v1.6.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.5.3/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.5.3" rel="nofollow" title="v1.5.3">v1.5.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.5.2/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.5.2" rel="nofollow" title="v1.5.2">v1.5.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.5.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.5.1" rel="nofollow" title="v1.5.1">v1.5.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.5.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.5.0" rel="nofollow" title="v1.5.0">v1.5.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.4.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.4.0" rel="nofollow" title="v1.4.0">v1.4.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.3.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.3.0" rel="nofollow" title="v1.3.0">v1.3.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.2.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.2.1" rel="nofollow" title="v1.2.1">v1.2.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.2.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.2.0" rel="nofollow" title="v1.2.0">v1.2.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.1.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.1.0" rel="nofollow" title="v1.1.0">v1.1.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.0.3/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.0.3" rel="nofollow" title="v1.0.3">v1.0.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.0.2/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.0.2" rel="nofollow" title="v1.0.2">v1.0.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.0.1/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.0.1" rel="nofollow" title="v1.0.1">v1.0.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/v1.0.0/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.0.0" rel="nofollow" title="v1.0.0">v1.0.0</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item js-navigation-target ">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mbostock/d3/blob/semver/lib/colorbrewer/colorbrewer.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="semver" rel="nofollow" title="semver">semver</a>
                </div> <!-- /.select-menu-item -->
            </div>

            <div class="select-menu-no-results">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/mbostock/d3" class="selected tabnav-tab" highlight="repo_source">Files</a></li>
    <li><a href="/mbostock/d3/commits/master" class="tabnav-tab" highlight="repo_commits">Commits</a></li>
    <li><a href="/mbostock/d3/branches" class="tabnav-tab" highlight="repo_branches" rel="nofollow">Branches <span class="counter ">15</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:396990d9ff0de8c8b81a9b4d5787bbaf -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:396990d9ff0de8c8b81a9b4d5787bbaf -->


<div id="slider">
    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

        <div class="breadcrumb">
          <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mbostock/d3" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">d3</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mbostock/d3/tree/master/lib" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">lib</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mbostock/d3/tree/master/lib/colorbrewer" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">colorbrewer</span></a></span><span class="separator"> / </span><strong class="final-path">colorbrewer.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="lib/colorbrewer/colorbrewer.js" data-copied-hint="copied!" title="copy to clipboard"><span class="mini-icon mini-icon-clipboard"></span></span>
        </div>

      <a href="/mbostock/d3/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>


        
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/ff5c11456f394c90fd15f97181c9c71e?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><span rel="author">Dean Malmgren</span></span>
    <time class="js-relative-date" datetime="2013-03-07T07:05:51-08:00" title="2013-03-07 07:05:51">March 07, 2013</time>
    <div class="commit-title">
        <a href="/mbostock/d3/commit/16d786c24db4dba6dd71ebfaa43b407b8ce8dfea" class="message">added qualitative color schemes to colorbrewer.js</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>2</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="mbostock" href="/mbostock/d3/commits/master/lib/colorbrewer/colorbrewer.js?author=mbostock"><img height="20" src="https://secure.gravatar.com/avatar/005a27e09fe946ebef64bf4d134efc0a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="calvinmetcalf" href="/mbostock/d3/commits/master/lib/colorbrewer/colorbrewer.js?author=calvinmetcalf"><img height="20" src="https://secure.gravatar.com/avatar/f015b4988bd660405cdf3c3d89c129a4?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/005a27e09fe946ebef64bf4d134efc0a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/mbostock">mbostock</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/f015b4988bd660405cdf3c3d89c129a4?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/calvinmetcalf">calvinmetcalf</a>
        </li>
      </ul>
    </div>
  </div>


    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/mbostock/d3/blob/9f25c5f55efba145fb3e47ef7cf5f3c99d42ed58/lib/colorbrewer/colorbrewer.js" data-title="d3/lib/colorbrewer/colorbrewer.js at master · mbostock/d3 · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>303 lines (302 sloc)</span>
                <span>18.99 kb</span>
              </div>
              <div class="actions">
                <div class="button-group">
                      <a class="minibutton js-entice" href=""
                         data-entice="You must be signed in and on a branch to make or propose changes">Edit</a>
                  <a href="/mbostock/d3/raw/master/lib/colorbrewer/colorbrewer.js" class="button minibutton " id="raw-url">Raw</a>
                    <a href="/mbostock/d3/blame/master/lib/colorbrewer/colorbrewer.js" class="button minibutton ">Blame</a>
                  <a href="/mbostock/d3/commits/master/lib/colorbrewer/colorbrewer.js" class="button minibutton " rel="nofollow">History</a>
                </div><!-- /.button-group -->
              </div><!-- /.actions -->

            </div>
                <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-diff">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="c1">// This product includes color specifications and designs developed by Cynthia Brewer (http://colorbrewer.org/).</span></div><div class='line' id='LC2'><span class="kd">var</span> <span class="nx">colorbrewer</span> <span class="o">=</span> <span class="p">{</span><span class="nx">YlGn</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC3'><span class="mi">3</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#f7fcb9&quot;</span><span class="p">,</span><span class="s2">&quot;#addd8e&quot;</span><span class="p">,</span><span class="s2">&quot;#31a354&quot;</span><span class="p">],</span></div><div class='line' id='LC4'><span class="mi">4</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#ffffcc&quot;</span><span class="p">,</span><span class="s2">&quot;#c2e699&quot;</span><span class="p">,</span><span class="s2">&quot;#78c679&quot;</span><span class="p">,</span><span class="s2">&quot;#238443&quot;</span><span class="p">],</span></div><div class='line' id='LC5'><span class="mi">5</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#ffffcc&quot;</span><span class="p">,</span><span class="s2">&quot;#c2e699&quot;</span><span class="p">,</span><span class="s2">&quot;#78c679&quot;</span><span class="p">,</span><span class="s2">&quot;#31a354&quot;</span><span class="p">,</span><span class="s2">&quot;#006837&quot;</span><span class="p">],</span></div><div class='line' id='LC6'><span class="mi">6</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#ffffcc&quot;</span><span class="p">,</span><span class="s2">&quot;#d9f0a3&quot;</span><span class="p">,</span><span class="s2">&quot;#addd8e&quot;</span><span class="p">,</span><span class="s2">&quot;#78c679&quot;</span><span class="p">,</span><span class="s2">&quot;#31a354&quot;</span><span class="p">,</span><span class="s2">&quot;#006837&quot;</span><span class="p">],</span></div><div class='line' id='LC7'><span class="mi">7</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#ffffcc&quot;</span><span class="p">,</span><span class="s2">&quot;#d9f0a3&quot;</span><span class="p">,</span><span class="s2">&quot;#addd8e&quot;</span><span class="p">,</span><span class="s2">&quot;#78c679&quot;</span><span class="p">,</span><span class="s2">&quot;#41ab5d&quot;</span><span class="p">,</span><span class="s2">&quot;#238443&quot;</span><span class="p">,</span><span class="s2">&quot;#005a32&quot;</span><span class="p">],</span></div><div class='line' id='LC8'><span class="mi">8</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#ffffe5&quot;</span><span class="p">,</span><span class="s2">&quot;#f7fcb9&quot;</span><span class="p">,</span><span class="s2">&quot;#d9f0a3&quot;</span><span class="p">,</span><span class="s2">&quot;#addd8e&quot;</span><span class="p">,</span><span class="s2">&quot;#78c679&quot;</span><span class="p">,</span><span class="s2">&quot;#41ab5d&quot;</span><span class="p">,</span><span class="s2">&quot;#238443&quot;</span><span class="p">,</span><span class="s2">&quot;#005a32&quot;</span><span class="p">],</span></div><div class='line' id='LC9'><span class="mi">9</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#ffffe5&quot;</span><span class="p">,</span><span class="s2">&quot;#f7fcb9&quot;</span><span class="p">,</span><span class="s2">&quot;#d9f0a3&quot;</span><span class="p">,</span><span class="s2">&quot;#addd8e&quot;</span><span class="p">,</span><span class="s2">&quot;#78c679&quot;</span><span class="p">,</span><span class="s2">&quot;#41ab5d&quot;</span><span class="p">,</span><span class="s2">&quot;#238443&quot;</span><span class="p">,</span><span class="s2">&quot;#006837&quot;</span><span class="p">,</span><span class="s2">&quot;#004529&quot;</span><span class="p">]</span></div><div class='line' id='LC10'><span class="p">},</span><span class="nx">YlGnBu</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC11'><span class="mi">3</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#edf8b1&quot;</span><span class="p">,</span><span class="s2">&quot;#7fcdbb&quot;</span><span class="p">,</span><span class="s2">&quot;#2c7fb8&quot;</span><span class="p">],</span></div><div class='line' id='LC12'><span class="mi">4</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#ffffcc&quot;</span><span class="p">,</span><span class="s2">&quot;#a1dab4&quot;</span><span class="p">,</span><span class="s2">&quot;#41b6c4&quot;</span><span class="p">,</span><span class="s2">&quot;#225ea8&quot;</span><span class="p">],</span></div><div class='line' id='LC13'><span class="mi">5</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#ffffcc&quot;</span><span class="p">,</span><span class="s2">&quot;#a1dab4&quot;</span><span class="p">,</span><span class="s2">&quot;#41b6c4&quot;</span><span class="p">,</span><span class="s2">&quot;#2c7fb8&quot;</span><span class="p">,</span><span class="s2">&quot;#253494&quot;</span><span class="p">],</span></div><div class='line' id='LC14'><span class="mi">6</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#ffffcc&quot;</span><span class="p">,</span><span class="s2">&quot;#c7e9b4&quot;</span><span class="p">,</span><span class="s2">&quot;#7fcdbb&quot;</span><span class="p">,</span><span class="s2">&quot;#41b6c4&quot;</span><span class="p">,</span><span class="s2">&quot;#2c7fb8&quot;</span><span class="p">,</span><span class="s2">&quot;#253494&quot;</span><span class="p">],</span></div><div class='line' id='LC15'><span class="mi">7</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#ffffcc&quot;</span><span class="p">,</span><span class="s2">&quot;#c7e9b4&quot;</span><span class="p">,</span><span class="s2">&quot;#7fcdbb&quot;</span><span class="p">,</span><span class="s2">&quot;#41b6c4&quot;</span><span class="p">,</span><span class="s2">&quot;#1d91c0&quot;</span><span class="p">,</span><span class="s2">&quot;#225ea8&quot;</span><span class="p">,</span><span class="s2">&quot;#0c2c84&quot;</span><span class="p">],</span></div><div class='line' id='LC16'><span class="mi">8</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#ffffd9&quot;</span><span class="p">,</span><span class="s2">&quot;#edf8b1&quot;</span><span class="p">,</span><span class="s2">&quot;#c7e9b4&quot;</span><span class="p">,</span><span class="s2">&quot;#7fcdbb&quot;</span><span class="p">,</span><span class="s2">&quot;#41b6c4&quot;</span><span class="p">,</span><span class="s2">&quot;#1d91c0&quot;</span><span class="p">,</span><span class="s2">&quot;#225ea8&quot;</span><span class="p">,</span><span class="s2">&quot;#0c2c84&quot;</span><span class="p">],</span></div><div class='line' id='LC17'><span class="mi">9</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#ffffd9&quot;</span><span class="p">,</span><span class="s2">&quot;#edf8b1&quot;</span><span class="p">,</span><span class="s2">&quot;#c7e9b4&quot;</span><span class="p">,</span><span class="s2">&quot;#7fcdbb&quot;</span><span class="p">,</span><span class="s2">&quot;#41b6c4&quot;</span><span class="p">,</span><span class="s2">&quot;#1d91c0&quot;</span><span class="p">,</span><span class="s2">&quot;#225ea8&quot;</span><span class="p">,</span><span class="s2">&quot;#253494&quot;</span><span class="p">,</span><span class="s2">&quot;#081d58&quot;</span><span class="p">]</span></div><div class='line' id='LC18'><span class="p">},</span><span class="nx">GnBu</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC19'><span class="mi">3</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#e0f3db&quot;</span><span class="p">,</span><span class="s2">&quot;#a8ddb5&quot;</span><span class="p">,</span><span class="s2">&quot;#43a2ca&quot;</span><span class="p">],</span></div><div class='line' id='LC20'><span class="mi">4</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#f0f9e8&quot;</span><span class="p">,</span><span class="s2">&quot;#bae4bc&quot;</span><span class="p">,</span><span class="s2">&quot;#7bccc4&quot;</span><span class="p">,</span><span class="s2">&quot;#2b8cbe&quot;</span><span class="p">],</span></div><div class='line' id='LC21'><span class="mi">5</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#f0f9e8&quot;</span><span class="p">,</span><span class="s2">&quot;#bae4bc&quot;</span><span class="p">,</span><span class="s2">&quot;#7bccc4&quot;</span><span class="p">,</span><span class="s2">&quot;#43a2ca&quot;</span><span class="p">,</span><span class="s2">&quot;#0868ac&quot;</span><span class="p">],</span></div><div class='line' id='LC22'><span class="mi">6</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#f0f9e8&quot;</span><span class="p">,</span><span class="s2">&quot;#ccebc5&quot;</span><span class="p">,</span><span class="s2">&quot;#a8ddb5&quot;</span><span class="p">,</span><span class="s2">&quot;#7bccc4&quot;</span><span class="p">,</span><span class="s2">&quot;#43a2ca&quot;</span><span class="p">,</span><span class="s2">&quot;#0868ac&quot;</span><span class="p">],</span></div><div class='line' id='LC23'><span class="mi">7</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#f0f9e8&quot;</span><span class="p">,</span><span class="s2">&quot;#ccebc5&quot;</span><span class="p">,</span><span class="s2">&quot;#a8ddb5&quot;</span><span class="p">,</span><span class="s2">&quot;#7bccc4&quot;</span><span class="p">,</span><span class="s2">&quot;#4eb3d3&quot;</span><span class="p">,</span><span class="s2">&quot;#2b8cbe&quot;</span><span class="p">,</span><span class="s2">&quot;#08589e&quot;</span><span class="p">],</span></div><div class='line' id='LC24'><span class="mi">8</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#f7fcf0&quot;</span><span class="p">,</span><span class="s2">&quot;#e0f3db&quot;</span><span class="p">,</span><span class="s2">&quot;#ccebc5&quot;</span><span class="p">,</span><span class="s2">&quot;#a8ddb5&quot;</span><span class="p">,</span><span class="s2">&quot;#7bccc4&quot;</span><span class="p">,</span><span class="s2">&quot;#4eb3d3&quot;</span><span class="p">,</span><span class="s2">&quot;#2b8cbe&quot;</span><span class="p">,</span><span class="s2">&quot;#08589e&quot;</span><span class="p">],</span></div><div class='line' id='LC25'><span class="mi">9</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#f7fcf0&quot;</span><span class="p">,</span><span class="s2">&quot;#e0f3db&quot;</span><span class="p">,</span><span class="s2">&quot;#ccebc5&quot;</span><span class="p">,</span><span class="s2">&quot;#a8ddb5&quot;</span><span class="p">,</span><span class="s2">&quot;#7bccc4&quot;</span><span class="p">,</span><span class="s2">&quot;#4eb3d3&quot;</span><span class="p">,</span><span class="s2">&quot;#2b8cbe&quot;</span><span class="p">,</span><span class="s2">&quot;#0868ac&quot;</span><span class="p">,</span><span class="s2">&quot;#084081&quot;</span><span class="p">]</span></div><div class='line' id='LC26'><span class="p">},</span><span class="nx">BuGn</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC27'><span class="mi">3</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#e5f5f9&quot;</span><span class="p">,</span><span class="s2">&quot;#99d8c9&quot;</span><span class="p">,</span><span class="s2">&quot;#2ca25f&quot;</span><span class="p">],</span></div><div class='line' id='LC28'><span class="mi">4</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#edf8fb&quot;</span><span class="p">,</span><span class="s2">&quot;#b2e2e2&quot;</span><span class="p">,</span><span class="s2">&quot;#66c2a4&quot;</span><span class="p">,</span><span class="s2">&quot;#238b45&quot;</span><span class="p">],</span></div><div class='line' id='LC29'><span class="mi">5</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#edf8fb&quot;</span><span class="p">,</span><span class="s2">&quot;#b2e2e2&quot;</span><span class="p">,</span><span class="s2">&quot;#66c2a4&quot;</span><span class="p">,</span><span class="s2">&quot;#2ca25f&quot;</span><span class="p">,</span><span class="s2">&quot;#006d2c&quot;</span><span class="p">],</span></div><div class='line' id='LC30'><span class="mi">6</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#edf8fb&quot;</span><span class="p">,</span><span class="s2">&quot;#ccece6&quot;</span><span class="p">,</span><span class="s2">&quot;#99d8c9&quot;</span><span class="p">,</span><span class="s2">&quot;#66c2a4&quot;</span><span class="p">,</span><span class="s2">&quot;#2ca25f&quot;</span><span class="p">,</span><span class="s2">&quot;#006d2c&quot;</span><span class="p">],</span></div><div class='line' id='LC31'><span class="mi">7</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#edf8fb&quot;</span><span class="p">,</span><span class="s2">&quot;#ccece6&quot;</span><span class="p">,</span><span class="s2">&quot;#99d8c9&quot;</span><span class="p">,</span><span class="s2">&quot;#66c2a4&quot;</span><span class="p">,</span><span class="s2">&quot;#41ae76&quot;</span><span class="p">,</span><span class="s2">&quot;#238b45&quot;</span><span class="p">,</span><span class="s2">&quot;#005824&quot;</span><span class="p">],</span></div><div class='line' id='LC32'><span class="mi">8</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#f7fcfd&quot;</span><span class="p">,</span><span class="s2">&quot;#e5f5f9&quot;</span><span class="p">,</span><span class="s2">&quot;#ccece6&quot;</span><span class="p">,</span><span class="s2">&quot;#99d8c9&quot;</span><span class="p">,</span><span class="s2">&quot;#66c2a4&quot;</span><span class="p">,</span><span class="s2">&quot;#41ae76&quot;</span><span class="p">,</span><span class="s2">&quot;#238b45&quot;</span><span class="p">,</span><span class="s2">&quot;#005824&quot;</span><span class="p">],</span></div><div class='line' id='LC33'><span class="mi">9</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#f7fcfd&quot;</span><span class="p">,</span><span class="s2">&quot;#e5f5f9&quot;</span><span class="p">,</span><span class="s2">&quot;#ccece6&quot;</span><span class="p">,</span><span class="s2">&quot;#99d8c9&quot;</span><span class="p">,</span><span class="s2">&quot;#66c2a4&quot;</span><span class="p">,</span><span class="s2">&quot;#41ae76&quot;</span><span class="p">,</span><span class="s2">&quot;#238b45&quot;</span><span class="p">,</span><span class="s2">&quot;#006d2c&quot;</span><span class="p">,</span><span class="s2">&quot;#00441b&quot;</span><span class="p">]</span></div><div class='line' id='LC34'><span class="p">},</span><span class="nx">PuBuGn</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC35'><span class="mi">3</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#ece2f0&quot;</span><span class="p">,</span><span class="s2">&quot;#a6bddb&quot;</span><span class="p">,</span><span class="s2">&quot;#1c9099&quot;</span><span class="p">],</span></div><div class='line' id='LC36'><span class="mi">4</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#f6eff7&quot;</span><span class="p">,</span><span class="s2">&quot;#bdc9e1&quot;</span><span class="p">,</span><span class="s2">&quot;#67a9cf&quot;</span><span class="p">,</span><span class="s2">&quot;#02818a&quot;</span><span class="p">],</span></div><div class='line' id='LC37'><span class="mi">5</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#f6eff7&quot;</span><span class="p">,</span><span class="s2">&quot;#bdc9e1&quot;</span><span class="p">,</span><span class="s2">&quot;#67a9cf&quot;</span><span class="p">,</span><span class="s2">&quot;#1c9099&quot;</span><span class="p">,</span><span class="s2">&quot;#016c59&quot;</span><span class="p">],</span></div><div class='line' id='LC38'><span class="mi">6</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#f6eff7&quot;</span><span class="p">,</span><span class="s2">&quot;#d0d1e6&quot;</span><span class="p">,</span><span class="s2">&quot;#a6bddb&quot;</span><span class="p">,</span><span class="s2">&quot;#67a9cf&quot;</span><span class="p">,</span><span class="s2">&quot;#1c9099&quot;</span><span class="p">,</span><span class="s2">&quot;#016c59&quot;</span><span class="p">],</span></div><div class='line' id='LC39'><span class="mi">7</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#f6eff7&quot;</span><span class="p">,</span><span class="s2">&quot;#d0d1e6&quot;</span><span class="p">,</span><span class="s2">&quot;#a6bddb&quot;</span><span class="p">,</span><span class="s2">&quot;#67a9cf&quot;</span><span class="p">,</span><span class="s2">&quot;#3690c0&quot;</span><span class="p">,</span><span class="s2">&quot;#02818a&quot;</span><span class="p">,</span><span class="s2">&quot;#016450&quot;</span><span class="p">],</span></div><div class='line' id='LC40'><span class="mi">8</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#fff7fb&quot;</span><span class="p">,</span><span class="s2">&quot;#ece2f0&quot;</span><span class="p">,</span><span class="s2">&quot;#d0d1e6&quot;</span><span class="p">,</span><span class="s2">&quot;#a6bddb&quot;</span><span class="p">,</span><span class="s2">&quot;#67a9cf&quot;</span><span class="p">,</span><span class="s2">&quot;#3690c0&quot;</span><span class="p">,</span><span class="s2">&quot;#02818a&quot;</span><span class="p">,</span><span class="s2">&quot;#016450&quot;</span><span class="p">],</span></div><div class='line' id='LC41'><span class="mi">9</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#fff7fb&quot;</span><span class="p">,</span><span class="s2">&quot;#ece2f0&quot;</span><span class="p">,</span><span class="s2">&quot;#d0d1e6&quot;</span><span class="p">,</span><span class="s2">&quot;#a6bddb&quot;</span><span class="p">,</span><span class="s2">&quot;#67a9cf&quot;</span><span class="p">,</span><span class="s2">&quot;#3690c0&quot;</span><span class="p">,</span><span class="s2">&quot;#02818a&quot;</span><span class="p">,</span><span class="s2">&quot;#016c59&quot;</span><span class="p">,</span><span class="s2">&quot;#014636&quot;</span><span class="p">]</span></div><div class='line' id='LC42'><span class="p">},</span><span class="nx">PuBu</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC43'><span class="mi">3</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#ece7f2&quot;</span><span class="p">,</span><span class="s2">&quot;#a6bddb&quot;</span><span class="p">,</span><span class="s2">&quot;#2b8cbe&quot;</span><span class="p">],</span></div><div class='line' id='LC44'><span class="mi">4</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#f1eef6&quot;</span><span class="p">,</span><span class="s2">&quot;#bdc9e1&quot;</span><span class="p">,</span><span class="s2">&quot;#74a9cf&quot;</span><span class="p">,</span><span class="s2">&quot;#0570b0&quot;</span><span class="p">],</span></div><div class='line' id='LC45'><span class="mi">5</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#f1eef6&quot;</span><span class="p">,</span><span class="s2">&quot;#bdc9e1&quot;</span><span class="p">,</span><span class="s2">&quot;#74a9cf&quot;</span><span class="p">,</span><span class="s2">&quot;#2b8cbe&quot;</span><span class="p">,</span><span class="s2">&quot;#045a8d&quot;</span><span class="p">],</span></div><div class='line' id='LC46'><span class="mi">6</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#f1eef6&quot;</span><span class="p">,</span><span class="s2">&quot;#d0d1e6&quot;</span><span class="p">,</span><span class="s2">&quot;#a6bddb&quot;</span><span class="p">,</span><span class="s2">&quot;#74a9cf&quot;</span><span class="p">,</span><span class="s2">&quot;#2b8cbe&quot;</span><span class="p">,</span><span class="s2">&quot;#045a8d&quot;</span><span class="p">],</span></div><div class='line' id='LC47'><span class="mi">7</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#f1eef6&quot;</span><span class="p">,</span><span class="s2">&quot;#d0d1e6&quot;</span><span class="p">,</span><span class="s2">&quot;#a6bddb&quot;</span><span class="p">,</span><span class="s2">&quot;#74a9cf&quot;</span><span class="p">,</span><span class="s2">&quot;#3690c0&quot;</span><span class="p">,</span><span class="s2">&quot;#0570b0&quot;</span><span class="p">,</span><span class="s2">&quot;#034e7b&quot;</span><span class="p">],</span></div><div class='line' id='LC48'><span class="mi">8</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#fff7fb&quot;</span><span class="p">,</span><span class="s2">&quot;#ece7f2&quot;</span><span class="p">,</span><span class="s2">&quot;#d0d1e6&quot;</span><span class="p">,</span><span class="s2">&quot;#a6bddb&quot;</span><span class="p">,</span><span class="s2">&quot;#74a9cf&quot;</span><span class="p">,</span><span class="s2">&quot;#3690c0&quot;</span><span class="p">,</span><span class="s2">&quot;#0570b0&quot;</span><span class="p">,</span><span class="s2">&quot;#034e7b&quot;</span><span class="p">],</span></div><div class='line' id='LC49'><span class="mi">9</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#fff7fb&quot;</span><span class="p">,</span><span class="s2">&quot;#ece7f2&quot;</span><span class="p">,</span><span class="s2">&quot;#d0d1e6&quot;</span><span class="p">,</span><span class="s2">&quot;#a6bddb&quot;</span><span class="p">,</span><span class="s2">&quot;#74a9cf&quot;</span><span class="p">,</span><span class="s2">&quot;#3690c0&quot;</span><span class="p">,</span><span class="s2">&quot;#0570b0&quot;</span><span class="p">,</span><span class="s2">&quot;#045a8d&quot;</span><span class="p">,</span><span class="s2">&quot;#023858&quot;</span><span class="p">]</span></div><div class='line' id='LC50'><span class="p">},</span><span class="nx">BuPu</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC51'><span class="mi">3</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#e0ecf4&quot;</span><span class="p">,</span><span class="s2">&quot;#9ebcda&quot;</span><span class="p">,</span><span class="s2">&quot;#8856a7&quot;</span><span class="p">],</span></div><div class='line' id='LC52'><span class="mi">4</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#edf8fb&quot;</span><span class="p">,</span><span class="s2">&quot;#b3cde3&quot;</span><span class="p">,</span><span class="s2">&quot;#8c96c6&quot;</span><span class="p">,</span><span class="s2">&quot;#88419d&quot;</span><span class="p">],</span></div><div class='line' id='LC53'><span class="mi">5</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#edf8fb&quot;</span><span class="p">,</span><span class="s2">&quot;#b3cde3&quot;</span><span class="p">,</span><span class="s2">&quot;#8c96c6&quot;</span><span class="p">,</span><span class="s2">&quot;#8856a7&quot;</span><span class="p">,</span><span class="s2">&quot;#810f7c&quot;</span><span class="p">],</span></div><div class='line' id='LC54'><span class="mi">6</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#edf8fb&quot;</span><span class="p">,</span><span class="s2">&quot;#bfd3e6&quot;</span><span class="p">,</span><span class="s2">&quot;#9ebcda&quot;</span><span class="p">,</span><span class="s2">&quot;#8c96c6&quot;</span><span class="p">,</span><span class="s2">&quot;#8856a7&quot;</span><span class="p">,</span><span class="s2">&quot;#810f7c&quot;</span><span class="p">],</span></div><div class='line' id='LC55'><span class="mi">7</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#edf8fb&quot;</span><span class="p">,</span><span class="s2">&quot;#bfd3e6&quot;</span><span class="p">,</span><span class="s2">&quot;#9ebcda&quot;</span><span class="p">,</span><span class="s2">&quot;#8c96c6&quot;</span><span class="p">,</span><span class="s2">&quot;#8c6bb1&quot;</span><span class="p">,</span><span class="s2">&quot;#88419d&quot;</span><span class="p">,</span><span class="s2">&quot;#6e016b&quot;</span><span class="p">],</span></div><div class='line' id='LC56'><span class="mi">8</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#f7fcfd&quot;</span><span class="p">,</span><span class="s2">&quot;#e0ecf4&quot;</span><span class="p">,</span><span class="s2">&quot;#bfd3e6&quot;</span><span class="p">,</span><span class="s2">&quot;#9ebcda&quot;</span><span class="p">,</span><span class="s2">&quot;#8c96c6&quot;</span><span class="p">,</span><span class="s2">&quot;#8c6bb1&quot;</span><span class="p">,</span><span class="s2">&quot;#88419d&quot;</span><span class="p">,</span><span class="s2">&quot;#6e016b&quot;</span><span class="p">],</span></div><div class='line' id='LC57'><span class="mi">9</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#f7fcfd&quot;</span><span class="p">,</span><span class="s2">&quot;#e0ecf4&quot;</span><span class="p">,</span><span class="s2">&quot;#bfd3e6&quot;</span><span class="p">,</span><span class="s2">&quot;#9ebcda&quot;</span><span class="p">,</span><span class="s2">&quot;#8c96c6&quot;</span><span class="p">,</span><span class="s2">&quot;#8c6bb1&quot;</span><span class="p">,</span><span class="s2">&quot;#88419d&quot;</span><span class="p">,</span><span class="s2">&quot;#810f7c&quot;</span><span class="p">,</span><span class="s2">&quot;#4d004b&quot;</span><span class="p">]</span></div><div class='line' id='LC58'><span class="p">},</span><span class="nx">RdPu</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC59'><span class="mi">3</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#fde0dd&quot;</span><span class="p">,</span><span class="s2">&quot;#fa9fb5&quot;</span><span class="p">,</span><span class="s2">&quot;#c51b8a&quot;</span><span class="p">],</span></div><div class='line' id='LC60'><span class="mi">4</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#feebe2&quot;</span><span class="p">,</span><span class="s2">&quot;#fbb4b9&quot;</span><span class="p">,</span><span class="s2">&quot;#f768a1&quot;</span><span class="p">,</span><span class="s2">&quot;#ae017e&quot;</span><span class="p">],</span></div><div class='line' id='LC61'><span class="mi">5</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#feebe2&quot;</span><span class="p">,</span><span class="s2">&quot;#fbb4b9&quot;</span><span class="p">,</span><span class="s2">&quot;#f768a1&quot;</span><span class="p">,</span><span class="s2">&quot;#c51b8a&quot;</span><span class="p">,</span><span class="s2">&quot;#7a0177&quot;</span><span class="p">],</span></div><div class='line' id='LC62'><span class="mi">6</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#feebe2&quot;</span><span class="p">,</span><span class="s2">&quot;#fcc5c0&quot;</span><span class="p">,</span><span class="s2">&quot;#fa9fb5&quot;</span><span class="p">,</span><span class="s2">&quot;#f768a1&quot;</span><span class="p">,</span><span class="s2">&quot;#c51b8a&quot;</span><span class="p">,</span><span class="s2">&quot;#7a0177&quot;</span><span class="p">],</span></div><div class='line' id='LC63'><span class="mi">7</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#feebe2&quot;</span><span class="p">,</span><span class="s2">&quot;#fcc5c0&quot;</span><span class="p">,</span><span class="s2">&quot;#fa9fb5&quot;</span><span class="p">,</span><span class="s2">&quot;#f768a1&quot;</span><span class="p">,</span><span class="s2">&quot;#dd3497&quot;</span><span class="p">,</span><span class="s2">&quot;#ae017e&quot;</span><span class="p">,</span><span class="s2">&quot;#7a0177&quot;</span><span class="p">],</span></div><div class='line' id='LC64'><span class="mi">8</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#fff7f3&quot;</span><span class="p">,</span><span class="s2">&quot;#fde0dd&quot;</span><span class="p">,</span><span class="s2">&quot;#fcc5c0&quot;</span><span class="p">,</span><span class="s2">&quot;#fa9fb5&quot;</span><span class="p">,</span><span class="s2">&quot;#f768a1&quot;</span><span class="p">,</span><span class="s2">&quot;#dd3497&quot;</span><span class="p">,</span><span class="s2">&quot;#ae017e&quot;</span><span class="p">,</span><span class="s2">&quot;#7a0177&quot;</span><span class="p">],</span></div><div class='line' id='LC65'><span class="mi">9</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#fff7f3&quot;</span><span class="p">,</span><span class="s2">&quot;#fde0dd&quot;</span><span class="p">,</span><span class="s2">&quot;#fcc5c0&quot;</span><span class="p">,</span><span class="s2">&quot;#fa9fb5&quot;</span><span class="p">,</span><span class="s2">&quot;#f768a1&quot;</span><span class="p">,</span><span class="s2">&quot;#dd3497&quot;</span><span class="p">,</span><span class="s2">&quot;#ae017e&quot;</span><span class="p">,</span><span class="s2">&quot;#7a0177&quot;</span><span class="p">,</span><span class="s2">&quot;#49006a&quot;</span><span class="p">]</span></div><div class='line' id='LC66'><span class="p">},</span><span class="nx">PuRd</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC67'><span class="mi">3</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#e7e1ef&quot;</span><span class="p">,</span><span class="s2">&quot;#c994c7&quot;</span><span class="p">,</span><span class="s2">&quot;#dd1c77&quot;</span><span class="p">],</span></div><div class='line' id='LC68'><span class="mi">4</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#f1eef6&quot;</span><span class="p">,</span><span class="s2">&quot;#d7b5d8&quot;</span><span class="p">,</span><span class="s2">&quot;#df65b0&quot;</span><span class="p">,</span><span class="s2">&quot;#ce1256&quot;</span><span class="p">],</span></div><div class='line' id='LC69'><span class="mi">5</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#f1eef6&quot;</span><span class="p">,</span><span class="s2">&quot;#d7b5d8&quot;</span><span class="p">,</span><span class="s2">&quot;#df65b0&quot;</span><span class="p">,</span><span class="s2">&quot;#dd1c77&quot;</span><span class="p">,</span><span class="s2">&quot;#980043&quot;</span><span class="p">],</span></div><div class='line' id='LC70'><span class="mi">6</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#f1eef6&quot;</span><span class="p">,</span><span class="s2">&quot;#d4b9da&quot;</span><span class="p">,</span><span class="s2">&quot;#c994c7&quot;</span><span class="p">,</span><span class="s2">&quot;#df65b0&quot;</span><span class="p">,</span><span class="s2">&quot;#dd1c77&quot;</span><span class="p">,</span><span class="s2">&quot;#980043&quot;</span><span class="p">],</span></div><div class='line' id='LC71'><span class="mi">7</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#f1eef6&quot;</span><span class="p">,</span><span class="s2">&quot;#d4b9da&quot;</span><span class="p">,</span><span class="s2">&quot;#c994c7&quot;</span><span class="p">,</span><span class="s2">&quot;#df65b0&quot;</span><span class="p">,</span><span class="s2">&quot;#e7298a&quot;</span><span class="p">,</span><span class="s2">&quot;#ce1256&quot;</span><span class="p">,</span><span class="s2">&quot;#91003f&quot;</span><span class="p">],</span></div><div class='line' id='LC72'><span class="mi">8</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#f7f4f9&quot;</span><span class="p">,</span><span class="s2">&quot;#e7e1ef&quot;</span><span class="p">,</span><span class="s2">&quot;#d4b9da&quot;</span><span class="p">,</span><span class="s2">&quot;#c994c7&quot;</span><span class="p">,</span><span class="s2">&quot;#df65b0&quot;</span><span class="p">,</span><span class="s2">&quot;#e7298a&quot;</span><span class="p">,</span><span class="s2">&quot;#ce1256&quot;</span><span class="p">,</span><span class="s2">&quot;#91003f&quot;</span><span class="p">],</span></div><div class='line' id='LC73'><span class="mi">9</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#f7f4f9&quot;</span><span class="p">,</span><span class="s2">&quot;#e7e1ef&quot;</span><span class="p">,</span><span class="s2">&quot;#d4b9da&quot;</span><span class="p">,</span><span class="s2">&quot;#c994c7&quot;</span><span class="p">,</span><span class="s2">&quot;#df65b0&quot;</span><span class="p">,</span><span class="s2">&quot;#e7298a&quot;</span><span class="p">,</span><span class="s2">&quot;#ce1256&quot;</span><span class="p">,</span><span class="s2">&quot;#980043&quot;</span><span class="p">,</span><span class="s2">&quot;#67001f&quot;</span><span class="p">]</span></div><div class='line' id='LC74'><span class="p">},</span><span class="nx">OrRd</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC75'><span class="mi">3</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#fee8c8&quot;</span><span class="p">,</span><span class="s2">&quot;#fdbb84&quot;</span><span class="p">,</span><span class="s2">&quot;#e34a33&quot;</span><span class="p">],</span></div><div class='line' id='LC76'><span class="mi">4</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#fef0d9&quot;</span><span class="p">,</span><span class="s2">&quot;#fdcc8a&quot;</span><span class="p">,</span><span class="s2">&quot;#fc8d59&quot;</span><span class="p">,</span><span class="s2">&quot;#d7301f&quot;</span><span class="p">],</span></div><div class='line' id='LC77'><span class="mi">5</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#fef0d9&quot;</span><span class="p">,</span><span class="s2">&quot;#fdcc8a&quot;</span><span class="p">,</span><span class="s2">&quot;#fc8d59&quot;</span><span class="p">,</span><span class="s2">&quot;#e34a33&quot;</span><span class="p">,</span><span class="s2">&quot;#b30000&quot;</span><span class="p">],</span></div><div class='line' id='LC78'><span class="mi">6</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#fef0d9&quot;</span><span class="p">,</span><span class="s2">&quot;#fdd49e&quot;</span><span class="p">,</span><span class="s2">&quot;#fdbb84&quot;</span><span class="p">,</span><span class="s2">&quot;#fc8d59&quot;</span><span class="p">,</span><span class="s2">&quot;#e34a33&quot;</span><span class="p">,</span><span class="s2">&quot;#b30000&quot;</span><span class="p">],</span></div><div class='line' id='LC79'><span class="mi">7</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#fef0d9&quot;</span><span class="p">,</span><span class="s2">&quot;#fdd49e&quot;</span><span class="p">,</span><span class="s2">&quot;#fdbb84&quot;</span><span class="p">,</span><span class="s2">&quot;#fc8d59&quot;</span><span class="p">,</span><span class="s2">&quot;#ef6548&quot;</span><span class="p">,</span><span class="s2">&quot;#d7301f&quot;</span><span class="p">,</span><span class="s2">&quot;#990000&quot;</span><span class="p">],</span></div><div class='line' id='LC80'><span class="mi">8</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#fff7ec&quot;</span><span class="p">,</span><span class="s2">&quot;#fee8c8&quot;</span><span class="p">,</span><span class="s2">&quot;#fdd49e&quot;</span><span class="p">,</span><span class="s2">&quot;#fdbb84&quot;</span><span class="p">,</span><span class="s2">&quot;#fc8d59&quot;</span><span class="p">,</span><span class="s2">&quot;#ef6548&quot;</span><span class="p">,</span><span class="s2">&quot;#d7301f&quot;</span><span class="p">,</span><span class="s2">&quot;#990000&quot;</span><span class="p">],</span></div><div class='line' id='LC81'><span class="mi">9</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#fff7ec&quot;</span><span class="p">,</span><span class="s2">&quot;#fee8c8&quot;</span><span class="p">,</span><span class="s2">&quot;#fdd49e&quot;</span><span class="p">,</span><span class="s2">&quot;#fdbb84&quot;</span><span class="p">,</span><span class="s2">&quot;#fc8d59&quot;</span><span class="p">,</span><span class="s2">&quot;#ef6548&quot;</span><span class="p">,</span><span class="s2">&quot;#d7301f&quot;</span><span class="p">,</span><span class="s2">&quot;#b30000&quot;</span><span class="p">,</span><span class="s2">&quot;#7f0000&quot;</span><span class="p">]</span></div><div class='line' id='LC82'><span class="p">},</span><span class="nx">YlOrRd</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC83'><span class="mi">3</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#ffeda0&quot;</span><span class="p">,</span><span class="s2">&quot;#feb24c&quot;</span><span class="p">,</span><span class="s2">&quot;#f03b20&quot;</span><span class="p">],</span></div><div class='line' id='LC84'><span class="mi">4</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#ffffb2&quot;</span><span class="p">,</span><span class="s2">&quot;#fecc5c&quot;</span><span class="p">,</span><span class="s2">&quot;#fd8d3c&quot;</span><span class="p">,</span><span class="s2">&quot;#e31a1c&quot;</span><span class="p">],</span></div><div class='line' id='LC85'><span class="mi">5</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#ffffb2&quot;</span><span class="p">,</span><span class="s2">&quot;#fecc5c&quot;</span><span class="p">,</span><span class="s2">&quot;#fd8d3c&quot;</span><span class="p">,</span><span class="s2">&quot;#f03b20&quot;</span><span class="p">,</span><span class="s2">&quot;#bd0026&quot;</span><span class="p">],</span></div><div class='line' id='LC86'><span class="mi">6</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#ffffb2&quot;</span><span class="p">,</span><span class="s2">&quot;#fed976&quot;</span><span class="p">,</span><span class="s2">&quot;#feb24c&quot;</span><span class="p">,</span><span class="s2">&quot;#fd8d3c&quot;</span><span class="p">,</span><span class="s2">&quot;#f03b20&quot;</span><span class="p">,</span><span class="s2">&quot;#bd0026&quot;</span><span class="p">],</span></div><div class='line' id='LC87'><span class="mi">7</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#ffffb2&quot;</span><span class="p">,</span><span class="s2">&quot;#fed976&quot;</span><span class="p">,</span><span class="s2">&quot;#feb24c&quot;</span><span class="p">,</span><span class="s2">&quot;#fd8d3c&quot;</span><span class="p">,</span><span class="s2">&quot;#fc4e2a&quot;</span><span class="p">,</span><span class="s2">&quot;#e31a1c&quot;</span><span class="p">,</span><span class="s2">&quot;#b10026&quot;</span><span class="p">],</span></div><div class='line' id='LC88'><span class="mi">8</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#ffffcc&quot;</span><span class="p">,</span><span class="s2">&quot;#ffeda0&quot;</span><span class="p">,</span><span class="s2">&quot;#fed976&quot;</span><span class="p">,</span><span class="s2">&quot;#feb24c&quot;</span><span class="p">,</span><span class="s2">&quot;#fd8d3c&quot;</span><span class="p">,</span><span class="s2">&quot;#fc4e2a&quot;</span><span class="p">,</span><span class="s2">&quot;#e31a1c&quot;</span><span class="p">,</span><span class="s2">&quot;#b10026&quot;</span><span class="p">],</span></div><div class='line' id='LC89'><span class="mi">9</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#ffffcc&quot;</span><span class="p">,</span><span class="s2">&quot;#ffeda0&quot;</span><span class="p">,</span><span class="s2">&quot;#fed976&quot;</span><span class="p">,</span><span class="s2">&quot;#feb24c&quot;</span><span class="p">,</span><span class="s2">&quot;#fd8d3c&quot;</span><span class="p">,</span><span class="s2">&quot;#fc4e2a&quot;</span><span class="p">,</span><span class="s2">&quot;#e31a1c&quot;</span><span class="p">,</span><span class="s2">&quot;#bd0026&quot;</span><span class="p">,</span><span class="s2">&quot;#800026&quot;</span><span class="p">]</span></div><div class='line' id='LC90'><span class="p">},</span><span class="nx">YlOrBr</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC91'><span class="mi">3</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#fff7bc&quot;</span><span class="p">,</span><span class="s2">&quot;#fec44f&quot;</span><span class="p">,</span><span class="s2">&quot;#d95f0e&quot;</span><span class="p">],</span></div><div class='line' id='LC92'><span class="mi">4</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#ffffd4&quot;</span><span class="p">,</span><span class="s2">&quot;#fed98e&quot;</span><span class="p">,</span><span class="s2">&quot;#fe9929&quot;</span><span class="p">,</span><span class="s2">&quot;#cc4c02&quot;</span><span class="p">],</span></div><div class='line' id='LC93'><span class="mi">5</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#ffffd4&quot;</span><span class="p">,</span><span class="s2">&quot;#fed98e&quot;</span><span class="p">,</span><span class="s2">&quot;#fe9929&quot;</span><span class="p">,</span><span class="s2">&quot;#d95f0e&quot;</span><span class="p">,</span><span class="s2">&quot;#993404&quot;</span><span class="p">],</span></div><div class='line' id='LC94'><span class="mi">6</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#ffffd4&quot;</span><span class="p">,</span><span class="s2">&quot;#fee391&quot;</span><span class="p">,</span><span class="s2">&quot;#fec44f&quot;</span><span class="p">,</span><span class="s2">&quot;#fe9929&quot;</span><span class="p">,</span><span class="s2">&quot;#d95f0e&quot;</span><span class="p">,</span><span class="s2">&quot;#993404&quot;</span><span class="p">],</span></div><div class='line' id='LC95'><span class="mi">7</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#ffffd4&quot;</span><span class="p">,</span><span class="s2">&quot;#fee391&quot;</span><span class="p">,</span><span class="s2">&quot;#fec44f&quot;</span><span class="p">,</span><span class="s2">&quot;#fe9929&quot;</span><span class="p">,</span><span class="s2">&quot;#ec7014&quot;</span><span class="p">,</span><span class="s2">&quot;#cc4c02&quot;</span><span class="p">,</span><span class="s2">&quot;#8c2d04&quot;</span><span class="p">],</span></div><div class='line' id='LC96'><span class="mi">8</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#ffffe5&quot;</span><span class="p">,</span><span class="s2">&quot;#fff7bc&quot;</span><span class="p">,</span><span class="s2">&quot;#fee391&quot;</span><span class="p">,</span><span class="s2">&quot;#fec44f&quot;</span><span class="p">,</span><span class="s2">&quot;#fe9929&quot;</span><span class="p">,</span><span class="s2">&quot;#ec7014&quot;</span><span class="p">,</span><span class="s2">&quot;#cc4c02&quot;</span><span class="p">,</span><span class="s2">&quot;#8c2d04&quot;</span><span class="p">],</span></div><div class='line' id='LC97'><span class="mi">9</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#ffffe5&quot;</span><span class="p">,</span><span class="s2">&quot;#fff7bc&quot;</span><span class="p">,</span><span class="s2">&quot;#fee391&quot;</span><span class="p">,</span><span class="s2">&quot;#fec44f&quot;</span><span class="p">,</span><span class="s2">&quot;#fe9929&quot;</span><span class="p">,</span><span class="s2">&quot;#ec7014&quot;</span><span class="p">,</span><span class="s2">&quot;#cc4c02&quot;</span><span class="p">,</span><span class="s2">&quot;#993404&quot;</span><span class="p">,</span><span class="s2">&quot;#662506&quot;</span><span class="p">]</span></div><div class='line' id='LC98'><span class="p">},</span><span class="nx">Purples</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC99'><span class="mi">3</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#efedf5&quot;</span><span class="p">,</span><span class="s2">&quot;#bcbddc&quot;</span><span class="p">,</span><span class="s2">&quot;#756bb1&quot;</span><span class="p">],</span></div><div class='line' id='LC100'><span class="mi">4</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#f2f0f7&quot;</span><span class="p">,</span><span class="s2">&quot;#cbc9e2&quot;</span><span class="p">,</span><span class="s2">&quot;#9e9ac8&quot;</span><span class="p">,</span><span class="s2">&quot;#6a51a3&quot;</span><span class="p">],</span></div><div class='line' id='LC101'><span class="mi">5</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#f2f0f7&quot;</span><span class="p">,</span><span class="s2">&quot;#cbc9e2&quot;</span><span class="p">,</span><span class="s2">&quot;#9e9ac8&quot;</span><span class="p">,</span><span class="s2">&quot;#756bb1&quot;</span><span class="p">,</span><span class="s2">&quot;#54278f&quot;</span><span class="p">],</span></div><div class='line' id='LC102'><span class="mi">6</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#f2f0f7&quot;</span><span class="p">,</span><span class="s2">&quot;#dadaeb&quot;</span><span class="p">,</span><span class="s2">&quot;#bcbddc&quot;</span><span class="p">,</span><span class="s2">&quot;#9e9ac8&quot;</span><span class="p">,</span><span class="s2">&quot;#756bb1&quot;</span><span class="p">,</span><span class="s2">&quot;#54278f&quot;</span><span class="p">],</span></div><div class='line' id='LC103'><span class="mi">7</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#f2f0f7&quot;</span><span class="p">,</span><span class="s2">&quot;#dadaeb&quot;</span><span class="p">,</span><span class="s2">&quot;#bcbddc&quot;</span><span class="p">,</span><span class="s2">&quot;#9e9ac8&quot;</span><span class="p">,</span><span class="s2">&quot;#807dba&quot;</span><span class="p">,</span><span class="s2">&quot;#6a51a3&quot;</span><span class="p">,</span><span class="s2">&quot;#4a1486&quot;</span><span class="p">],</span></div><div class='line' id='LC104'><span class="mi">8</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#fcfbfd&quot;</span><span class="p">,</span><span class="s2">&quot;#efedf5&quot;</span><span class="p">,</span><span class="s2">&quot;#dadaeb&quot;</span><span class="p">,</span><span class="s2">&quot;#bcbddc&quot;</span><span class="p">,</span><span class="s2">&quot;#9e9ac8&quot;</span><span class="p">,</span><span class="s2">&quot;#807dba&quot;</span><span class="p">,</span><span class="s2">&quot;#6a51a3&quot;</span><span class="p">,</span><span class="s2">&quot;#4a1486&quot;</span><span class="p">],</span></div><div class='line' id='LC105'><span class="mi">9</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#fcfbfd&quot;</span><span class="p">,</span><span class="s2">&quot;#efedf5&quot;</span><span class="p">,</span><span class="s2">&quot;#dadaeb&quot;</span><span class="p">,</span><span class="s2">&quot;#bcbddc&quot;</span><span class="p">,</span><span class="s2">&quot;#9e9ac8&quot;</span><span class="p">,</span><span class="s2">&quot;#807dba&quot;</span><span class="p">,</span><span class="s2">&quot;#6a51a3&quot;</span><span class="p">,</span><span class="s2">&quot;#54278f&quot;</span><span class="p">,</span><span class="s2">&quot;#3f007d&quot;</span><span class="p">]</span></div><div class='line' id='LC106'><span class="p">},</span><span class="nx">Blues</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC107'><span class="mi">3</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#deebf7&quot;</span><span class="p">,</span><span class="s2">&quot;#9ecae1&quot;</span><span class="p">,</span><span class="s2">&quot;#3182bd&quot;</span><span class="p">],</span></div><div class='line' id='LC108'><span class="mi">4</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#eff3ff&quot;</span><span class="p">,</span><span class="s2">&quot;#bdd7e7&quot;</span><span class="p">,</span><span class="s2">&quot;#6baed6&quot;</span><span class="p">,</span><span class="s2">&quot;#2171b5&quot;</span><span class="p">],</span></div><div class='line' id='LC109'><span class="mi">5</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#eff3ff&quot;</span><span class="p">,</span><span class="s2">&quot;#bdd7e7&quot;</span><span class="p">,</span><span class="s2">&quot;#6baed6&quot;</span><span class="p">,</span><span class="s2">&quot;#3182bd&quot;</span><span class="p">,</span><span class="s2">&quot;#08519c&quot;</span><span class="p">],</span></div><div class='line' id='LC110'><span class="mi">6</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#eff3ff&quot;</span><span class="p">,</span><span class="s2">&quot;#c6dbef&quot;</span><span class="p">,</span><span class="s2">&quot;#9ecae1&quot;</span><span class="p">,</span><span class="s2">&quot;#6baed6&quot;</span><span class="p">,</span><span class="s2">&quot;#3182bd&quot;</span><span class="p">,</span><span class="s2">&quot;#08519c&quot;</span><span class="p">],</span></div><div class='line' id='LC111'><span class="mi">7</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#eff3ff&quot;</span><span class="p">,</span><span class="s2">&quot;#c6dbef&quot;</span><span class="p">,</span><span class="s2">&quot;#9ecae1&quot;</span><span class="p">,</span><span class="s2">&quot;#6baed6&quot;</span><span class="p">,</span><span class="s2">&quot;#4292c6&quot;</span><span class="p">,</span><span class="s2">&quot;#2171b5&quot;</span><span class="p">,</span><span class="s2">&quot;#084594&quot;</span><span class="p">],</span></div><div class='line' id='LC112'><span class="mi">8</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#f7fbff&quot;</span><span class="p">,</span><span class="s2">&quot;#deebf7&quot;</span><span class="p">,</span><span class="s2">&quot;#c6dbef&quot;</span><span class="p">,</span><span class="s2">&quot;#9ecae1&quot;</span><span class="p">,</span><span class="s2">&quot;#6baed6&quot;</span><span class="p">,</span><span class="s2">&quot;#4292c6&quot;</span><span class="p">,</span><span class="s2">&quot;#2171b5&quot;</span><span class="p">,</span><span class="s2">&quot;#084594&quot;</span><span class="p">],</span></div><div class='line' id='LC113'><span class="mi">9</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#f7fbff&quot;</span><span class="p">,</span><span class="s2">&quot;#deebf7&quot;</span><span class="p">,</span><span class="s2">&quot;#c6dbef&quot;</span><span class="p">,</span><span class="s2">&quot;#9ecae1&quot;</span><span class="p">,</span><span class="s2">&quot;#6baed6&quot;</span><span class="p">,</span><span class="s2">&quot;#4292c6&quot;</span><span class="p">,</span><span class="s2">&quot;#2171b5&quot;</span><span class="p">,</span><span class="s2">&quot;#08519c&quot;</span><span class="p">,</span><span class="s2">&quot;#08306b&quot;</span><span class="p">]</span></div><div class='line' id='LC114'><span class="p">},</span><span class="nx">Greens</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC115'><span class="mi">3</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#e5f5e0&quot;</span><span class="p">,</span><span class="s2">&quot;#a1d99b&quot;</span><span class="p">,</span><span class="s2">&quot;#31a354&quot;</span><span class="p">],</span></div><div class='line' id='LC116'><span class="mi">4</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#edf8e9&quot;</span><span class="p">,</span><span class="s2">&quot;#bae4b3&quot;</span><span class="p">,</span><span class="s2">&quot;#74c476&quot;</span><span class="p">,</span><span class="s2">&quot;#238b45&quot;</span><span class="p">],</span></div><div class='line' id='LC117'><span class="mi">5</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#edf8e9&quot;</span><span class="p">,</span><span class="s2">&quot;#bae4b3&quot;</span><span class="p">,</span><span class="s2">&quot;#74c476&quot;</span><span class="p">,</span><span class="s2">&quot;#31a354&quot;</span><span class="p">,</span><span class="s2">&quot;#006d2c&quot;</span><span class="p">],</span></div><div class='line' id='LC118'><span class="mi">6</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#edf8e9&quot;</span><span class="p">,</span><span class="s2">&quot;#c7e9c0&quot;</span><span class="p">,</span><span class="s2">&quot;#a1d99b&quot;</span><span class="p">,</span><span class="s2">&quot;#74c476&quot;</span><span class="p">,</span><span class="s2">&quot;#31a354&quot;</span><span class="p">,</span><span class="s2">&quot;#006d2c&quot;</span><span class="p">],</span></div><div class='line' id='LC119'><span class="mi">7</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#edf8e9&quot;</span><span class="p">,</span><span class="s2">&quot;#c7e9c0&quot;</span><span class="p">,</span><span class="s2">&quot;#a1d99b&quot;</span><span class="p">,</span><span class="s2">&quot;#74c476&quot;</span><span class="p">,</span><span class="s2">&quot;#41ab5d&quot;</span><span class="p">,</span><span class="s2">&quot;#238b45&quot;</span><span class="p">,</span><span class="s2">&quot;#005a32&quot;</span><span class="p">],</span></div><div class='line' id='LC120'><span class="mi">8</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#f7fcf5&quot;</span><span class="p">,</span><span class="s2">&quot;#e5f5e0&quot;</span><span class="p">,</span><span class="s2">&quot;#c7e9c0&quot;</span><span class="p">,</span><span class="s2">&quot;#a1d99b&quot;</span><span class="p">,</span><span class="s2">&quot;#74c476&quot;</span><span class="p">,</span><span class="s2">&quot;#41ab5d&quot;</span><span class="p">,</span><span class="s2">&quot;#238b45&quot;</span><span class="p">,</span><span class="s2">&quot;#005a32&quot;</span><span class="p">],</span></div><div class='line' id='LC121'><span class="mi">9</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#f7fcf5&quot;</span><span class="p">,</span><span class="s2">&quot;#e5f5e0&quot;</span><span class="p">,</span><span class="s2">&quot;#c7e9c0&quot;</span><span class="p">,</span><span class="s2">&quot;#a1d99b&quot;</span><span class="p">,</span><span class="s2">&quot;#74c476&quot;</span><span class="p">,</span><span class="s2">&quot;#41ab5d&quot;</span><span class="p">,</span><span class="s2">&quot;#238b45&quot;</span><span class="p">,</span><span class="s2">&quot;#006d2c&quot;</span><span class="p">,</span><span class="s2">&quot;#00441b&quot;</span><span class="p">]</span></div><div class='line' id='LC122'><span class="p">},</span><span class="nx">Oranges</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC123'><span class="mi">3</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#fee6ce&quot;</span><span class="p">,</span><span class="s2">&quot;#fdae6b&quot;</span><span class="p">,</span><span class="s2">&quot;#e6550d&quot;</span><span class="p">],</span></div><div class='line' id='LC124'><span class="mi">4</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#feedde&quot;</span><span class="p">,</span><span class="s2">&quot;#fdbe85&quot;</span><span class="p">,</span><span class="s2">&quot;#fd8d3c&quot;</span><span class="p">,</span><span class="s2">&quot;#d94701&quot;</span><span class="p">],</span></div><div class='line' id='LC125'><span class="mi">5</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#feedde&quot;</span><span class="p">,</span><span class="s2">&quot;#fdbe85&quot;</span><span class="p">,</span><span class="s2">&quot;#fd8d3c&quot;</span><span class="p">,</span><span class="s2">&quot;#e6550d&quot;</span><span class="p">,</span><span class="s2">&quot;#a63603&quot;</span><span class="p">],</span></div><div class='line' id='LC126'><span class="mi">6</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#feedde&quot;</span><span class="p">,</span><span class="s2">&quot;#fdd0a2&quot;</span><span class="p">,</span><span class="s2">&quot;#fdae6b&quot;</span><span class="p">,</span><span class="s2">&quot;#fd8d3c&quot;</span><span class="p">,</span><span class="s2">&quot;#e6550d&quot;</span><span class="p">,</span><span class="s2">&quot;#a63603&quot;</span><span class="p">],</span></div><div class='line' id='LC127'><span class="mi">7</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#feedde&quot;</span><span class="p">,</span><span class="s2">&quot;#fdd0a2&quot;</span><span class="p">,</span><span class="s2">&quot;#fdae6b&quot;</span><span class="p">,</span><span class="s2">&quot;#fd8d3c&quot;</span><span class="p">,</span><span class="s2">&quot;#f16913&quot;</span><span class="p">,</span><span class="s2">&quot;#d94801&quot;</span><span class="p">,</span><span class="s2">&quot;#8c2d04&quot;</span><span class="p">],</span></div><div class='line' id='LC128'><span class="mi">8</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#fff5eb&quot;</span><span class="p">,</span><span class="s2">&quot;#fee6ce&quot;</span><span class="p">,</span><span class="s2">&quot;#fdd0a2&quot;</span><span class="p">,</span><span class="s2">&quot;#fdae6b&quot;</span><span class="p">,</span><span class="s2">&quot;#fd8d3c&quot;</span><span class="p">,</span><span class="s2">&quot;#f16913&quot;</span><span class="p">,</span><span class="s2">&quot;#d94801&quot;</span><span class="p">,</span><span class="s2">&quot;#8c2d04&quot;</span><span class="p">],</span></div><div class='line' id='LC129'><span class="mi">9</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#fff5eb&quot;</span><span class="p">,</span><span class="s2">&quot;#fee6ce&quot;</span><span class="p">,</span><span class="s2">&quot;#fdd0a2&quot;</span><span class="p">,</span><span class="s2">&quot;#fdae6b&quot;</span><span class="p">,</span><span class="s2">&quot;#fd8d3c&quot;</span><span class="p">,</span><span class="s2">&quot;#f16913&quot;</span><span class="p">,</span><span class="s2">&quot;#d94801&quot;</span><span class="p">,</span><span class="s2">&quot;#a63603&quot;</span><span class="p">,</span><span class="s2">&quot;#7f2704&quot;</span><span class="p">]</span></div><div class='line' id='LC130'><span class="p">},</span><span class="nx">Reds</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC131'><span class="mi">3</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#fee0d2&quot;</span><span class="p">,</span><span class="s2">&quot;#fc9272&quot;</span><span class="p">,</span><span class="s2">&quot;#de2d26&quot;</span><span class="p">],</span></div><div class='line' id='LC132'><span class="mi">4</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#fee5d9&quot;</span><span class="p">,</span><span class="s2">&quot;#fcae91&quot;</span><span class="p">,</span><span class="s2">&quot;#fb6a4a&quot;</span><span class="p">,</span><span class="s2">&quot;#cb181d&quot;</span><span class="p">],</span></div><div class='line' id='LC133'><span class="mi">5</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#fee5d9&quot;</span><span class="p">,</span><span class="s2">&quot;#fcae91&quot;</span><span class="p">,</span><span class="s2">&quot;#fb6a4a&quot;</span><span class="p">,</span><span class="s2">&quot;#de2d26&quot;</span><span class="p">,</span><span class="s2">&quot;#a50f15&quot;</span><span class="p">],</span></div><div class='line' id='LC134'><span class="mi">6</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#fee5d9&quot;</span><span class="p">,</span><span class="s2">&quot;#fcbba1&quot;</span><span class="p">,</span><span class="s2">&quot;#fc9272&quot;</span><span class="p">,</span><span class="s2">&quot;#fb6a4a&quot;</span><span class="p">,</span><span class="s2">&quot;#de2d26&quot;</span><span class="p">,</span><span class="s2">&quot;#a50f15&quot;</span><span class="p">],</span></div><div class='line' id='LC135'><span class="mi">7</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#fee5d9&quot;</span><span class="p">,</span><span class="s2">&quot;#fcbba1&quot;</span><span class="p">,</span><span class="s2">&quot;#fc9272&quot;</span><span class="p">,</span><span class="s2">&quot;#fb6a4a&quot;</span><span class="p">,</span><span class="s2">&quot;#ef3b2c&quot;</span><span class="p">,</span><span class="s2">&quot;#cb181d&quot;</span><span class="p">,</span><span class="s2">&quot;#99000d&quot;</span><span class="p">],</span></div><div class='line' id='LC136'><span class="mi">8</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#fff5f0&quot;</span><span class="p">,</span><span class="s2">&quot;#fee0d2&quot;</span><span class="p">,</span><span class="s2">&quot;#fcbba1&quot;</span><span class="p">,</span><span class="s2">&quot;#fc9272&quot;</span><span class="p">,</span><span class="s2">&quot;#fb6a4a&quot;</span><span class="p">,</span><span class="s2">&quot;#ef3b2c&quot;</span><span class="p">,</span><span class="s2">&quot;#cb181d&quot;</span><span class="p">,</span><span class="s2">&quot;#99000d&quot;</span><span class="p">],</span></div><div class='line' id='LC137'><span class="mi">9</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#fff5f0&quot;</span><span class="p">,</span><span class="s2">&quot;#fee0d2&quot;</span><span class="p">,</span><span class="s2">&quot;#fcbba1&quot;</span><span class="p">,</span><span class="s2">&quot;#fc9272&quot;</span><span class="p">,</span><span class="s2">&quot;#fb6a4a&quot;</span><span class="p">,</span><span class="s2">&quot;#ef3b2c&quot;</span><span class="p">,</span><span class="s2">&quot;#cb181d&quot;</span><span class="p">,</span><span class="s2">&quot;#a50f15&quot;</span><span class="p">,</span><span class="s2">&quot;#67000d&quot;</span><span class="p">]</span></div><div class='line' id='LC138'><span class="p">},</span><span class="nx">Greys</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC139'><span class="mi">3</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#f0f0f0&quot;</span><span class="p">,</span><span class="s2">&quot;#bdbdbd&quot;</span><span class="p">,</span><span class="s2">&quot;#636363&quot;</span><span class="p">],</span></div><div class='line' id='LC140'><span class="mi">4</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#f7f7f7&quot;</span><span class="p">,</span><span class="s2">&quot;#cccccc&quot;</span><span class="p">,</span><span class="s2">&quot;#969696&quot;</span><span class="p">,</span><span class="s2">&quot;#525252&quot;</span><span class="p">],</span></div><div class='line' id='LC141'><span class="mi">5</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#f7f7f7&quot;</span><span class="p">,</span><span class="s2">&quot;#cccccc&quot;</span><span class="p">,</span><span class="s2">&quot;#969696&quot;</span><span class="p">,</span><span class="s2">&quot;#636363&quot;</span><span class="p">,</span><span class="s2">&quot;#252525&quot;</span><span class="p">],</span></div><div class='line' id='LC142'><span class="mi">6</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#f7f7f7&quot;</span><span class="p">,</span><span class="s2">&quot;#d9d9d9&quot;</span><span class="p">,</span><span class="s2">&quot;#bdbdbd&quot;</span><span class="p">,</span><span class="s2">&quot;#969696&quot;</span><span class="p">,</span><span class="s2">&quot;#636363&quot;</span><span class="p">,</span><span class="s2">&quot;#252525&quot;</span><span class="p">],</span></div><div class='line' id='LC143'><span class="mi">7</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#f7f7f7&quot;</span><span class="p">,</span><span class="s2">&quot;#d9d9d9&quot;</span><span class="p">,</span><span class="s2">&quot;#bdbdbd&quot;</span><span class="p">,</span><span class="s2">&quot;#969696&quot;</span><span class="p">,</span><span class="s2">&quot;#737373&quot;</span><span class="p">,</span><span class="s2">&quot;#525252&quot;</span><span class="p">,</span><span class="s2">&quot;#252525&quot;</span><span class="p">],</span></div><div class='line' id='LC144'><span class="mi">8</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#ffffff&quot;</span><span class="p">,</span><span class="s2">&quot;#f0f0f0&quot;</span><span class="p">,</span><span class="s2">&quot;#d9d9d9&quot;</span><span class="p">,</span><span class="s2">&quot;#bdbdbd&quot;</span><span class="p">,</span><span class="s2">&quot;#969696&quot;</span><span class="p">,</span><span class="s2">&quot;#737373&quot;</span><span class="p">,</span><span class="s2">&quot;#525252&quot;</span><span class="p">,</span><span class="s2">&quot;#252525&quot;</span><span class="p">],</span></div><div class='line' id='LC145'><span class="mi">9</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#ffffff&quot;</span><span class="p">,</span><span class="s2">&quot;#f0f0f0&quot;</span><span class="p">,</span><span class="s2">&quot;#d9d9d9&quot;</span><span class="p">,</span><span class="s2">&quot;#bdbdbd&quot;</span><span class="p">,</span><span class="s2">&quot;#969696&quot;</span><span class="p">,</span><span class="s2">&quot;#737373&quot;</span><span class="p">,</span><span class="s2">&quot;#525252&quot;</span><span class="p">,</span><span class="s2">&quot;#252525&quot;</span><span class="p">,</span><span class="s2">&quot;#000000&quot;</span><span class="p">]</span></div><div class='line' id='LC146'><span class="p">},</span><span class="nx">PuOr</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC147'><span class="mi">3</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#f1a340&quot;</span><span class="p">,</span><span class="s2">&quot;#f7f7f7&quot;</span><span class="p">,</span><span class="s2">&quot;#998ec3&quot;</span><span class="p">],</span></div><div class='line' id='LC148'><span class="mi">4</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#e66101&quot;</span><span class="p">,</span><span class="s2">&quot;#fdb863&quot;</span><span class="p">,</span><span class="s2">&quot;#b2abd2&quot;</span><span class="p">,</span><span class="s2">&quot;#5e3c99&quot;</span><span class="p">],</span></div><div class='line' id='LC149'><span class="mi">5</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#e66101&quot;</span><span class="p">,</span><span class="s2">&quot;#fdb863&quot;</span><span class="p">,</span><span class="s2">&quot;#f7f7f7&quot;</span><span class="p">,</span><span class="s2">&quot;#b2abd2&quot;</span><span class="p">,</span><span class="s2">&quot;#5e3c99&quot;</span><span class="p">],</span></div><div class='line' id='LC150'><span class="mi">6</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#b35806&quot;</span><span class="p">,</span><span class="s2">&quot;#f1a340&quot;</span><span class="p">,</span><span class="s2">&quot;#fee0b6&quot;</span><span class="p">,</span><span class="s2">&quot;#d8daeb&quot;</span><span class="p">,</span><span class="s2">&quot;#998ec3&quot;</span><span class="p">,</span><span class="s2">&quot;#542788&quot;</span><span class="p">],</span></div><div class='line' id='LC151'><span class="mi">7</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#b35806&quot;</span><span class="p">,</span><span class="s2">&quot;#f1a340&quot;</span><span class="p">,</span><span class="s2">&quot;#fee0b6&quot;</span><span class="p">,</span><span class="s2">&quot;#f7f7f7&quot;</span><span class="p">,</span><span class="s2">&quot;#d8daeb&quot;</span><span class="p">,</span><span class="s2">&quot;#998ec3&quot;</span><span class="p">,</span><span class="s2">&quot;#542788&quot;</span><span class="p">],</span></div><div class='line' id='LC152'><span class="mi">8</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#b35806&quot;</span><span class="p">,</span><span class="s2">&quot;#e08214&quot;</span><span class="p">,</span><span class="s2">&quot;#fdb863&quot;</span><span class="p">,</span><span class="s2">&quot;#fee0b6&quot;</span><span class="p">,</span><span class="s2">&quot;#d8daeb&quot;</span><span class="p">,</span><span class="s2">&quot;#b2abd2&quot;</span><span class="p">,</span><span class="s2">&quot;#8073ac&quot;</span><span class="p">,</span><span class="s2">&quot;#542788&quot;</span><span class="p">],</span></div><div class='line' id='LC153'><span class="mi">9</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#b35806&quot;</span><span class="p">,</span><span class="s2">&quot;#e08214&quot;</span><span class="p">,</span><span class="s2">&quot;#fdb863&quot;</span><span class="p">,</span><span class="s2">&quot;#fee0b6&quot;</span><span class="p">,</span><span class="s2">&quot;#f7f7f7&quot;</span><span class="p">,</span><span class="s2">&quot;#d8daeb&quot;</span><span class="p">,</span><span class="s2">&quot;#b2abd2&quot;</span><span class="p">,</span><span class="s2">&quot;#8073ac&quot;</span><span class="p">,</span><span class="s2">&quot;#542788&quot;</span><span class="p">],</span></div><div class='line' id='LC154'><span class="mi">10</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#7f3b08&quot;</span><span class="p">,</span><span class="s2">&quot;#b35806&quot;</span><span class="p">,</span><span class="s2">&quot;#e08214&quot;</span><span class="p">,</span><span class="s2">&quot;#fdb863&quot;</span><span class="p">,</span><span class="s2">&quot;#fee0b6&quot;</span><span class="p">,</span><span class="s2">&quot;#d8daeb&quot;</span><span class="p">,</span><span class="s2">&quot;#b2abd2&quot;</span><span class="p">,</span><span class="s2">&quot;#8073ac&quot;</span><span class="p">,</span><span class="s2">&quot;#542788&quot;</span><span class="p">,</span><span class="s2">&quot;#2d004b&quot;</span><span class="p">],</span></div><div class='line' id='LC155'><span class="mi">11</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#7f3b08&quot;</span><span class="p">,</span><span class="s2">&quot;#b35806&quot;</span><span class="p">,</span><span class="s2">&quot;#e08214&quot;</span><span class="p">,</span><span class="s2">&quot;#fdb863&quot;</span><span class="p">,</span><span class="s2">&quot;#fee0b6&quot;</span><span class="p">,</span><span class="s2">&quot;#f7f7f7&quot;</span><span class="p">,</span><span class="s2">&quot;#d8daeb&quot;</span><span class="p">,</span><span class="s2">&quot;#b2abd2&quot;</span><span class="p">,</span><span class="s2">&quot;#8073ac&quot;</span><span class="p">,</span><span class="s2">&quot;#542788&quot;</span><span class="p">,</span><span class="s2">&quot;#2d004b&quot;</span><span class="p">]</span></div><div class='line' id='LC156'><span class="p">},</span><span class="nx">BrBG</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC157'><span class="mi">3</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#d8b365&quot;</span><span class="p">,</span><span class="s2">&quot;#f5f5f5&quot;</span><span class="p">,</span><span class="s2">&quot;#5ab4ac&quot;</span><span class="p">],</span></div><div class='line' id='LC158'><span class="mi">4</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#a6611a&quot;</span><span class="p">,</span><span class="s2">&quot;#dfc27d&quot;</span><span class="p">,</span><span class="s2">&quot;#80cdc1&quot;</span><span class="p">,</span><span class="s2">&quot;#018571&quot;</span><span class="p">],</span></div><div class='line' id='LC159'><span class="mi">5</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#a6611a&quot;</span><span class="p">,</span><span class="s2">&quot;#dfc27d&quot;</span><span class="p">,</span><span class="s2">&quot;#f5f5f5&quot;</span><span class="p">,</span><span class="s2">&quot;#80cdc1&quot;</span><span class="p">,</span><span class="s2">&quot;#018571&quot;</span><span class="p">],</span></div><div class='line' id='LC160'><span class="mi">6</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#8c510a&quot;</span><span class="p">,</span><span class="s2">&quot;#d8b365&quot;</span><span class="p">,</span><span class="s2">&quot;#f6e8c3&quot;</span><span class="p">,</span><span class="s2">&quot;#c7eae5&quot;</span><span class="p">,</span><span class="s2">&quot;#5ab4ac&quot;</span><span class="p">,</span><span class="s2">&quot;#01665e&quot;</span><span class="p">],</span></div><div class='line' id='LC161'><span class="mi">7</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#8c510a&quot;</span><span class="p">,</span><span class="s2">&quot;#d8b365&quot;</span><span class="p">,</span><span class="s2">&quot;#f6e8c3&quot;</span><span class="p">,</span><span class="s2">&quot;#f5f5f5&quot;</span><span class="p">,</span><span class="s2">&quot;#c7eae5&quot;</span><span class="p">,</span><span class="s2">&quot;#5ab4ac&quot;</span><span class="p">,</span><span class="s2">&quot;#01665e&quot;</span><span class="p">],</span></div><div class='line' id='LC162'><span class="mi">8</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#8c510a&quot;</span><span class="p">,</span><span class="s2">&quot;#bf812d&quot;</span><span class="p">,</span><span class="s2">&quot;#dfc27d&quot;</span><span class="p">,</span><span class="s2">&quot;#f6e8c3&quot;</span><span class="p">,</span><span class="s2">&quot;#c7eae5&quot;</span><span class="p">,</span><span class="s2">&quot;#80cdc1&quot;</span><span class="p">,</span><span class="s2">&quot;#35978f&quot;</span><span class="p">,</span><span class="s2">&quot;#01665e&quot;</span><span class="p">],</span></div><div class='line' id='LC163'><span class="mi">9</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#8c510a&quot;</span><span class="p">,</span><span class="s2">&quot;#bf812d&quot;</span><span class="p">,</span><span class="s2">&quot;#dfc27d&quot;</span><span class="p">,</span><span class="s2">&quot;#f6e8c3&quot;</span><span class="p">,</span><span class="s2">&quot;#f5f5f5&quot;</span><span class="p">,</span><span class="s2">&quot;#c7eae5&quot;</span><span class="p">,</span><span class="s2">&quot;#80cdc1&quot;</span><span class="p">,</span><span class="s2">&quot;#35978f&quot;</span><span class="p">,</span><span class="s2">&quot;#01665e&quot;</span><span class="p">],</span></div><div class='line' id='LC164'><span class="mi">10</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#543005&quot;</span><span class="p">,</span><span class="s2">&quot;#8c510a&quot;</span><span class="p">,</span><span class="s2">&quot;#bf812d&quot;</span><span class="p">,</span><span class="s2">&quot;#dfc27d&quot;</span><span class="p">,</span><span class="s2">&quot;#f6e8c3&quot;</span><span class="p">,</span><span class="s2">&quot;#c7eae5&quot;</span><span class="p">,</span><span class="s2">&quot;#80cdc1&quot;</span><span class="p">,</span><span class="s2">&quot;#35978f&quot;</span><span class="p">,</span><span class="s2">&quot;#01665e&quot;</span><span class="p">,</span><span class="s2">&quot;#003c30&quot;</span><span class="p">],</span></div><div class='line' id='LC165'><span class="mi">11</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#543005&quot;</span><span class="p">,</span><span class="s2">&quot;#8c510a&quot;</span><span class="p">,</span><span class="s2">&quot;#bf812d&quot;</span><span class="p">,</span><span class="s2">&quot;#dfc27d&quot;</span><span class="p">,</span><span class="s2">&quot;#f6e8c3&quot;</span><span class="p">,</span><span class="s2">&quot;#f5f5f5&quot;</span><span class="p">,</span><span class="s2">&quot;#c7eae5&quot;</span><span class="p">,</span><span class="s2">&quot;#80cdc1&quot;</span><span class="p">,</span><span class="s2">&quot;#35978f&quot;</span><span class="p">,</span><span class="s2">&quot;#01665e&quot;</span><span class="p">,</span><span class="s2">&quot;#003c30&quot;</span><span class="p">]</span></div><div class='line' id='LC166'><span class="p">},</span><span class="nx">PRGn</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC167'><span class="mi">3</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#af8dc3&quot;</span><span class="p">,</span><span class="s2">&quot;#f7f7f7&quot;</span><span class="p">,</span><span class="s2">&quot;#7fbf7b&quot;</span><span class="p">],</span></div><div class='line' id='LC168'><span class="mi">4</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#7b3294&quot;</span><span class="p">,</span><span class="s2">&quot;#c2a5cf&quot;</span><span class="p">,</span><span class="s2">&quot;#a6dba0&quot;</span><span class="p">,</span><span class="s2">&quot;#008837&quot;</span><span class="p">],</span></div><div class='line' id='LC169'><span class="mi">5</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#7b3294&quot;</span><span class="p">,</span><span class="s2">&quot;#c2a5cf&quot;</span><span class="p">,</span><span class="s2">&quot;#f7f7f7&quot;</span><span class="p">,</span><span class="s2">&quot;#a6dba0&quot;</span><span class="p">,</span><span class="s2">&quot;#008837&quot;</span><span class="p">],</span></div><div class='line' id='LC170'><span class="mi">6</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#762a83&quot;</span><span class="p">,</span><span class="s2">&quot;#af8dc3&quot;</span><span class="p">,</span><span class="s2">&quot;#e7d4e8&quot;</span><span class="p">,</span><span class="s2">&quot;#d9f0d3&quot;</span><span class="p">,</span><span class="s2">&quot;#7fbf7b&quot;</span><span class="p">,</span><span class="s2">&quot;#1b7837&quot;</span><span class="p">],</span></div><div class='line' id='LC171'><span class="mi">7</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#762a83&quot;</span><span class="p">,</span><span class="s2">&quot;#af8dc3&quot;</span><span class="p">,</span><span class="s2">&quot;#e7d4e8&quot;</span><span class="p">,</span><span class="s2">&quot;#f7f7f7&quot;</span><span class="p">,</span><span class="s2">&quot;#d9f0d3&quot;</span><span class="p">,</span><span class="s2">&quot;#7fbf7b&quot;</span><span class="p">,</span><span class="s2">&quot;#1b7837&quot;</span><span class="p">],</span></div><div class='line' id='LC172'><span class="mi">8</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#762a83&quot;</span><span class="p">,</span><span class="s2">&quot;#9970ab&quot;</span><span class="p">,</span><span class="s2">&quot;#c2a5cf&quot;</span><span class="p">,</span><span class="s2">&quot;#e7d4e8&quot;</span><span class="p">,</span><span class="s2">&quot;#d9f0d3&quot;</span><span class="p">,</span><span class="s2">&quot;#a6dba0&quot;</span><span class="p">,</span><span class="s2">&quot;#5aae61&quot;</span><span class="p">,</span><span class="s2">&quot;#1b7837&quot;</span><span class="p">],</span></div><div class='line' id='LC173'><span class="mi">9</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#762a83&quot;</span><span class="p">,</span><span class="s2">&quot;#9970ab&quot;</span><span class="p">,</span><span class="s2">&quot;#c2a5cf&quot;</span><span class="p">,</span><span class="s2">&quot;#e7d4e8&quot;</span><span class="p">,</span><span class="s2">&quot;#f7f7f7&quot;</span><span class="p">,</span><span class="s2">&quot;#d9f0d3&quot;</span><span class="p">,</span><span class="s2">&quot;#a6dba0&quot;</span><span class="p">,</span><span class="s2">&quot;#5aae61&quot;</span><span class="p">,</span><span class="s2">&quot;#1b7837&quot;</span><span class="p">],</span></div><div class='line' id='LC174'><span class="mi">10</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#40004b&quot;</span><span class="p">,</span><span class="s2">&quot;#762a83&quot;</span><span class="p">,</span><span class="s2">&quot;#9970ab&quot;</span><span class="p">,</span><span class="s2">&quot;#c2a5cf&quot;</span><span class="p">,</span><span class="s2">&quot;#e7d4e8&quot;</span><span class="p">,</span><span class="s2">&quot;#d9f0d3&quot;</span><span class="p">,</span><span class="s2">&quot;#a6dba0&quot;</span><span class="p">,</span><span class="s2">&quot;#5aae61&quot;</span><span class="p">,</span><span class="s2">&quot;#1b7837&quot;</span><span class="p">,</span><span class="s2">&quot;#00441b&quot;</span><span class="p">],</span></div><div class='line' id='LC175'><span class="mi">11</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#40004b&quot;</span><span class="p">,</span><span class="s2">&quot;#762a83&quot;</span><span class="p">,</span><span class="s2">&quot;#9970ab&quot;</span><span class="p">,</span><span class="s2">&quot;#c2a5cf&quot;</span><span class="p">,</span><span class="s2">&quot;#e7d4e8&quot;</span><span class="p">,</span><span class="s2">&quot;#f7f7f7&quot;</span><span class="p">,</span><span class="s2">&quot;#d9f0d3&quot;</span><span class="p">,</span><span class="s2">&quot;#a6dba0&quot;</span><span class="p">,</span><span class="s2">&quot;#5aae61&quot;</span><span class="p">,</span><span class="s2">&quot;#1b7837&quot;</span><span class="p">,</span><span class="s2">&quot;#00441b&quot;</span><span class="p">]</span></div><div class='line' id='LC176'><span class="p">},</span><span class="nx">PiYG</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC177'><span class="mi">3</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#e9a3c9&quot;</span><span class="p">,</span><span class="s2">&quot;#f7f7f7&quot;</span><span class="p">,</span><span class="s2">&quot;#a1d76a&quot;</span><span class="p">],</span></div><div class='line' id='LC178'><span class="mi">4</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#d01c8b&quot;</span><span class="p">,</span><span class="s2">&quot;#f1b6da&quot;</span><span class="p">,</span><span class="s2">&quot;#b8e186&quot;</span><span class="p">,</span><span class="s2">&quot;#4dac26&quot;</span><span class="p">],</span></div><div class='line' id='LC179'><span class="mi">5</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#d01c8b&quot;</span><span class="p">,</span><span class="s2">&quot;#f1b6da&quot;</span><span class="p">,</span><span class="s2">&quot;#f7f7f7&quot;</span><span class="p">,</span><span class="s2">&quot;#b8e186&quot;</span><span class="p">,</span><span class="s2">&quot;#4dac26&quot;</span><span class="p">],</span></div><div class='line' id='LC180'><span class="mi">6</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#c51b7d&quot;</span><span class="p">,</span><span class="s2">&quot;#e9a3c9&quot;</span><span class="p">,</span><span class="s2">&quot;#fde0ef&quot;</span><span class="p">,</span><span class="s2">&quot;#e6f5d0&quot;</span><span class="p">,</span><span class="s2">&quot;#a1d76a&quot;</span><span class="p">,</span><span class="s2">&quot;#4d9221&quot;</span><span class="p">],</span></div><div class='line' id='LC181'><span class="mi">7</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#c51b7d&quot;</span><span class="p">,</span><span class="s2">&quot;#e9a3c9&quot;</span><span class="p">,</span><span class="s2">&quot;#fde0ef&quot;</span><span class="p">,</span><span class="s2">&quot;#f7f7f7&quot;</span><span class="p">,</span><span class="s2">&quot;#e6f5d0&quot;</span><span class="p">,</span><span class="s2">&quot;#a1d76a&quot;</span><span class="p">,</span><span class="s2">&quot;#4d9221&quot;</span><span class="p">],</span></div><div class='line' id='LC182'><span class="mi">8</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#c51b7d&quot;</span><span class="p">,</span><span class="s2">&quot;#de77ae&quot;</span><span class="p">,</span><span class="s2">&quot;#f1b6da&quot;</span><span class="p">,</span><span class="s2">&quot;#fde0ef&quot;</span><span class="p">,</span><span class="s2">&quot;#e6f5d0&quot;</span><span class="p">,</span><span class="s2">&quot;#b8e186&quot;</span><span class="p">,</span><span class="s2">&quot;#7fbc41&quot;</span><span class="p">,</span><span class="s2">&quot;#4d9221&quot;</span><span class="p">],</span></div><div class='line' id='LC183'><span class="mi">9</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#c51b7d&quot;</span><span class="p">,</span><span class="s2">&quot;#de77ae&quot;</span><span class="p">,</span><span class="s2">&quot;#f1b6da&quot;</span><span class="p">,</span><span class="s2">&quot;#fde0ef&quot;</span><span class="p">,</span><span class="s2">&quot;#f7f7f7&quot;</span><span class="p">,</span><span class="s2">&quot;#e6f5d0&quot;</span><span class="p">,</span><span class="s2">&quot;#b8e186&quot;</span><span class="p">,</span><span class="s2">&quot;#7fbc41&quot;</span><span class="p">,</span><span class="s2">&quot;#4d9221&quot;</span><span class="p">],</span></div><div class='line' id='LC184'><span class="mi">10</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#8e0152&quot;</span><span class="p">,</span><span class="s2">&quot;#c51b7d&quot;</span><span class="p">,</span><span class="s2">&quot;#de77ae&quot;</span><span class="p">,</span><span class="s2">&quot;#f1b6da&quot;</span><span class="p">,</span><span class="s2">&quot;#fde0ef&quot;</span><span class="p">,</span><span class="s2">&quot;#e6f5d0&quot;</span><span class="p">,</span><span class="s2">&quot;#b8e186&quot;</span><span class="p">,</span><span class="s2">&quot;#7fbc41&quot;</span><span class="p">,</span><span class="s2">&quot;#4d9221&quot;</span><span class="p">,</span><span class="s2">&quot;#276419&quot;</span><span class="p">],</span></div><div class='line' id='LC185'><span class="mi">11</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#8e0152&quot;</span><span class="p">,</span><span class="s2">&quot;#c51b7d&quot;</span><span class="p">,</span><span class="s2">&quot;#de77ae&quot;</span><span class="p">,</span><span class="s2">&quot;#f1b6da&quot;</span><span class="p">,</span><span class="s2">&quot;#fde0ef&quot;</span><span class="p">,</span><span class="s2">&quot;#f7f7f7&quot;</span><span class="p">,</span><span class="s2">&quot;#e6f5d0&quot;</span><span class="p">,</span><span class="s2">&quot;#b8e186&quot;</span><span class="p">,</span><span class="s2">&quot;#7fbc41&quot;</span><span class="p">,</span><span class="s2">&quot;#4d9221&quot;</span><span class="p">,</span><span class="s2">&quot;#276419&quot;</span><span class="p">]</span></div><div class='line' id='LC186'><span class="p">},</span><span class="nx">RdBu</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC187'><span class="mi">3</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#ef8a62&quot;</span><span class="p">,</span><span class="s2">&quot;#f7f7f7&quot;</span><span class="p">,</span><span class="s2">&quot;#67a9cf&quot;</span><span class="p">],</span></div><div class='line' id='LC188'><span class="mi">4</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#ca0020&quot;</span><span class="p">,</span><span class="s2">&quot;#f4a582&quot;</span><span class="p">,</span><span class="s2">&quot;#92c5de&quot;</span><span class="p">,</span><span class="s2">&quot;#0571b0&quot;</span><span class="p">],</span></div><div class='line' id='LC189'><span class="mi">5</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#ca0020&quot;</span><span class="p">,</span><span class="s2">&quot;#f4a582&quot;</span><span class="p">,</span><span class="s2">&quot;#f7f7f7&quot;</span><span class="p">,</span><span class="s2">&quot;#92c5de&quot;</span><span class="p">,</span><span class="s2">&quot;#0571b0&quot;</span><span class="p">],</span></div><div class='line' id='LC190'><span class="mi">6</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#b2182b&quot;</span><span class="p">,</span><span class="s2">&quot;#ef8a62&quot;</span><span class="p">,</span><span class="s2">&quot;#fddbc7&quot;</span><span class="p">,</span><span class="s2">&quot;#d1e5f0&quot;</span><span class="p">,</span><span class="s2">&quot;#67a9cf&quot;</span><span class="p">,</span><span class="s2">&quot;#2166ac&quot;</span><span class="p">],</span></div><div class='line' id='LC191'><span class="mi">7</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#b2182b&quot;</span><span class="p">,</span><span class="s2">&quot;#ef8a62&quot;</span><span class="p">,</span><span class="s2">&quot;#fddbc7&quot;</span><span class="p">,</span><span class="s2">&quot;#f7f7f7&quot;</span><span class="p">,</span><span class="s2">&quot;#d1e5f0&quot;</span><span class="p">,</span><span class="s2">&quot;#67a9cf&quot;</span><span class="p">,</span><span class="s2">&quot;#2166ac&quot;</span><span class="p">],</span></div><div class='line' id='LC192'><span class="mi">8</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#b2182b&quot;</span><span class="p">,</span><span class="s2">&quot;#d6604d&quot;</span><span class="p">,</span><span class="s2">&quot;#f4a582&quot;</span><span class="p">,</span><span class="s2">&quot;#fddbc7&quot;</span><span class="p">,</span><span class="s2">&quot;#d1e5f0&quot;</span><span class="p">,</span><span class="s2">&quot;#92c5de&quot;</span><span class="p">,</span><span class="s2">&quot;#4393c3&quot;</span><span class="p">,</span><span class="s2">&quot;#2166ac&quot;</span><span class="p">],</span></div><div class='line' id='LC193'><span class="mi">9</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#b2182b&quot;</span><span class="p">,</span><span class="s2">&quot;#d6604d&quot;</span><span class="p">,</span><span class="s2">&quot;#f4a582&quot;</span><span class="p">,</span><span class="s2">&quot;#fddbc7&quot;</span><span class="p">,</span><span class="s2">&quot;#f7f7f7&quot;</span><span class="p">,</span><span class="s2">&quot;#d1e5f0&quot;</span><span class="p">,</span><span class="s2">&quot;#92c5de&quot;</span><span class="p">,</span><span class="s2">&quot;#4393c3&quot;</span><span class="p">,</span><span class="s2">&quot;#2166ac&quot;</span><span class="p">],</span></div><div class='line' id='LC194'><span class="mi">10</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#67001f&quot;</span><span class="p">,</span><span class="s2">&quot;#b2182b&quot;</span><span class="p">,</span><span class="s2">&quot;#d6604d&quot;</span><span class="p">,</span><span class="s2">&quot;#f4a582&quot;</span><span class="p">,</span><span class="s2">&quot;#fddbc7&quot;</span><span class="p">,</span><span class="s2">&quot;#d1e5f0&quot;</span><span class="p">,</span><span class="s2">&quot;#92c5de&quot;</span><span class="p">,</span><span class="s2">&quot;#4393c3&quot;</span><span class="p">,</span><span class="s2">&quot;#2166ac&quot;</span><span class="p">,</span><span class="s2">&quot;#053061&quot;</span><span class="p">],</span></div><div class='line' id='LC195'><span class="mi">11</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#67001f&quot;</span><span class="p">,</span><span class="s2">&quot;#b2182b&quot;</span><span class="p">,</span><span class="s2">&quot;#d6604d&quot;</span><span class="p">,</span><span class="s2">&quot;#f4a582&quot;</span><span class="p">,</span><span class="s2">&quot;#fddbc7&quot;</span><span class="p">,</span><span class="s2">&quot;#f7f7f7&quot;</span><span class="p">,</span><span class="s2">&quot;#d1e5f0&quot;</span><span class="p">,</span><span class="s2">&quot;#92c5de&quot;</span><span class="p">,</span><span class="s2">&quot;#4393c3&quot;</span><span class="p">,</span><span class="s2">&quot;#2166ac&quot;</span><span class="p">,</span><span class="s2">&quot;#053061&quot;</span><span class="p">]</span></div><div class='line' id='LC196'><span class="p">},</span><span class="nx">RdGy</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC197'><span class="mi">3</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#ef8a62&quot;</span><span class="p">,</span><span class="s2">&quot;#ffffff&quot;</span><span class="p">,</span><span class="s2">&quot;#999999&quot;</span><span class="p">],</span></div><div class='line' id='LC198'><span class="mi">4</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#ca0020&quot;</span><span class="p">,</span><span class="s2">&quot;#f4a582&quot;</span><span class="p">,</span><span class="s2">&quot;#bababa&quot;</span><span class="p">,</span><span class="s2">&quot;#404040&quot;</span><span class="p">],</span></div><div class='line' id='LC199'><span class="mi">5</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#ca0020&quot;</span><span class="p">,</span><span class="s2">&quot;#f4a582&quot;</span><span class="p">,</span><span class="s2">&quot;#ffffff&quot;</span><span class="p">,</span><span class="s2">&quot;#bababa&quot;</span><span class="p">,</span><span class="s2">&quot;#404040&quot;</span><span class="p">],</span></div><div class='line' id='LC200'><span class="mi">6</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#b2182b&quot;</span><span class="p">,</span><span class="s2">&quot;#ef8a62&quot;</span><span class="p">,</span><span class="s2">&quot;#fddbc7&quot;</span><span class="p">,</span><span class="s2">&quot;#e0e0e0&quot;</span><span class="p">,</span><span class="s2">&quot;#999999&quot;</span><span class="p">,</span><span class="s2">&quot;#4d4d4d&quot;</span><span class="p">],</span></div><div class='line' id='LC201'><span class="mi">7</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#b2182b&quot;</span><span class="p">,</span><span class="s2">&quot;#ef8a62&quot;</span><span class="p">,</span><span class="s2">&quot;#fddbc7&quot;</span><span class="p">,</span><span class="s2">&quot;#ffffff&quot;</span><span class="p">,</span><span class="s2">&quot;#e0e0e0&quot;</span><span class="p">,</span><span class="s2">&quot;#999999&quot;</span><span class="p">,</span><span class="s2">&quot;#4d4d4d&quot;</span><span class="p">],</span></div><div class='line' id='LC202'><span class="mi">8</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#b2182b&quot;</span><span class="p">,</span><span class="s2">&quot;#d6604d&quot;</span><span class="p">,</span><span class="s2">&quot;#f4a582&quot;</span><span class="p">,</span><span class="s2">&quot;#fddbc7&quot;</span><span class="p">,</span><span class="s2">&quot;#e0e0e0&quot;</span><span class="p">,</span><span class="s2">&quot;#bababa&quot;</span><span class="p">,</span><span class="s2">&quot;#878787&quot;</span><span class="p">,</span><span class="s2">&quot;#4d4d4d&quot;</span><span class="p">],</span></div><div class='line' id='LC203'><span class="mi">9</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#b2182b&quot;</span><span class="p">,</span><span class="s2">&quot;#d6604d&quot;</span><span class="p">,</span><span class="s2">&quot;#f4a582&quot;</span><span class="p">,</span><span class="s2">&quot;#fddbc7&quot;</span><span class="p">,</span><span class="s2">&quot;#ffffff&quot;</span><span class="p">,</span><span class="s2">&quot;#e0e0e0&quot;</span><span class="p">,</span><span class="s2">&quot;#bababa&quot;</span><span class="p">,</span><span class="s2">&quot;#878787&quot;</span><span class="p">,</span><span class="s2">&quot;#4d4d4d&quot;</span><span class="p">],</span></div><div class='line' id='LC204'><span class="mi">10</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#67001f&quot;</span><span class="p">,</span><span class="s2">&quot;#b2182b&quot;</span><span class="p">,</span><span class="s2">&quot;#d6604d&quot;</span><span class="p">,</span><span class="s2">&quot;#f4a582&quot;</span><span class="p">,</span><span class="s2">&quot;#fddbc7&quot;</span><span class="p">,</span><span class="s2">&quot;#e0e0e0&quot;</span><span class="p">,</span><span class="s2">&quot;#bababa&quot;</span><span class="p">,</span><span class="s2">&quot;#878787&quot;</span><span class="p">,</span><span class="s2">&quot;#4d4d4d&quot;</span><span class="p">,</span><span class="s2">&quot;#1a1a1a&quot;</span><span class="p">],</span></div><div class='line' id='LC205'><span class="mi">11</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#67001f&quot;</span><span class="p">,</span><span class="s2">&quot;#b2182b&quot;</span><span class="p">,</span><span class="s2">&quot;#d6604d&quot;</span><span class="p">,</span><span class="s2">&quot;#f4a582&quot;</span><span class="p">,</span><span class="s2">&quot;#fddbc7&quot;</span><span class="p">,</span><span class="s2">&quot;#ffffff&quot;</span><span class="p">,</span><span class="s2">&quot;#e0e0e0&quot;</span><span class="p">,</span><span class="s2">&quot;#bababa&quot;</span><span class="p">,</span><span class="s2">&quot;#878787&quot;</span><span class="p">,</span><span class="s2">&quot;#4d4d4d&quot;</span><span class="p">,</span><span class="s2">&quot;#1a1a1a&quot;</span><span class="p">]</span></div><div class='line' id='LC206'><span class="p">},</span><span class="nx">RdYlBu</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC207'><span class="mi">3</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#fc8d59&quot;</span><span class="p">,</span><span class="s2">&quot;#ffffbf&quot;</span><span class="p">,</span><span class="s2">&quot;#91bfdb&quot;</span><span class="p">],</span></div><div class='line' id='LC208'><span class="mi">4</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#d7191c&quot;</span><span class="p">,</span><span class="s2">&quot;#fdae61&quot;</span><span class="p">,</span><span class="s2">&quot;#abd9e9&quot;</span><span class="p">,</span><span class="s2">&quot;#2c7bb6&quot;</span><span class="p">],</span></div><div class='line' id='LC209'><span class="mi">5</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#d7191c&quot;</span><span class="p">,</span><span class="s2">&quot;#fdae61&quot;</span><span class="p">,</span><span class="s2">&quot;#ffffbf&quot;</span><span class="p">,</span><span class="s2">&quot;#abd9e9&quot;</span><span class="p">,</span><span class="s2">&quot;#2c7bb6&quot;</span><span class="p">],</span></div><div class='line' id='LC210'><span class="mi">6</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#d73027&quot;</span><span class="p">,</span><span class="s2">&quot;#fc8d59&quot;</span><span class="p">,</span><span class="s2">&quot;#fee090&quot;</span><span class="p">,</span><span class="s2">&quot;#e0f3f8&quot;</span><span class="p">,</span><span class="s2">&quot;#91bfdb&quot;</span><span class="p">,</span><span class="s2">&quot;#4575b4&quot;</span><span class="p">],</span></div><div class='line' id='LC211'><span class="mi">7</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#d73027&quot;</span><span class="p">,</span><span class="s2">&quot;#fc8d59&quot;</span><span class="p">,</span><span class="s2">&quot;#fee090&quot;</span><span class="p">,</span><span class="s2">&quot;#ffffbf&quot;</span><span class="p">,</span><span class="s2">&quot;#e0f3f8&quot;</span><span class="p">,</span><span class="s2">&quot;#91bfdb&quot;</span><span class="p">,</span><span class="s2">&quot;#4575b4&quot;</span><span class="p">],</span></div><div class='line' id='LC212'><span class="mi">8</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#d73027&quot;</span><span class="p">,</span><span class="s2">&quot;#f46d43&quot;</span><span class="p">,</span><span class="s2">&quot;#fdae61&quot;</span><span class="p">,</span><span class="s2">&quot;#fee090&quot;</span><span class="p">,</span><span class="s2">&quot;#e0f3f8&quot;</span><span class="p">,</span><span class="s2">&quot;#abd9e9&quot;</span><span class="p">,</span><span class="s2">&quot;#74add1&quot;</span><span class="p">,</span><span class="s2">&quot;#4575b4&quot;</span><span class="p">],</span></div><div class='line' id='LC213'><span class="mi">9</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#d73027&quot;</span><span class="p">,</span><span class="s2">&quot;#f46d43&quot;</span><span class="p">,</span><span class="s2">&quot;#fdae61&quot;</span><span class="p">,</span><span class="s2">&quot;#fee090&quot;</span><span class="p">,</span><span class="s2">&quot;#ffffbf&quot;</span><span class="p">,</span><span class="s2">&quot;#e0f3f8&quot;</span><span class="p">,</span><span class="s2">&quot;#abd9e9&quot;</span><span class="p">,</span><span class="s2">&quot;#74add1&quot;</span><span class="p">,</span><span class="s2">&quot;#4575b4&quot;</span><span class="p">],</span></div><div class='line' id='LC214'><span class="mi">10</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#a50026&quot;</span><span class="p">,</span><span class="s2">&quot;#d73027&quot;</span><span class="p">,</span><span class="s2">&quot;#f46d43&quot;</span><span class="p">,</span><span class="s2">&quot;#fdae61&quot;</span><span class="p">,</span><span class="s2">&quot;#fee090&quot;</span><span class="p">,</span><span class="s2">&quot;#e0f3f8&quot;</span><span class="p">,</span><span class="s2">&quot;#abd9e9&quot;</span><span class="p">,</span><span class="s2">&quot;#74add1&quot;</span><span class="p">,</span><span class="s2">&quot;#4575b4&quot;</span><span class="p">,</span><span class="s2">&quot;#313695&quot;</span><span class="p">],</span></div><div class='line' id='LC215'><span class="mi">11</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#a50026&quot;</span><span class="p">,</span><span class="s2">&quot;#d73027&quot;</span><span class="p">,</span><span class="s2">&quot;#f46d43&quot;</span><span class="p">,</span><span class="s2">&quot;#fdae61&quot;</span><span class="p">,</span><span class="s2">&quot;#fee090&quot;</span><span class="p">,</span><span class="s2">&quot;#ffffbf&quot;</span><span class="p">,</span><span class="s2">&quot;#e0f3f8&quot;</span><span class="p">,</span><span class="s2">&quot;#abd9e9&quot;</span><span class="p">,</span><span class="s2">&quot;#74add1&quot;</span><span class="p">,</span><span class="s2">&quot;#4575b4&quot;</span><span class="p">,</span><span class="s2">&quot;#313695&quot;</span><span class="p">]</span></div><div class='line' id='LC216'><span class="p">},</span><span class="nx">Spectral</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC217'><span class="mi">3</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#fc8d59&quot;</span><span class="p">,</span><span class="s2">&quot;#ffffbf&quot;</span><span class="p">,</span><span class="s2">&quot;#99d594&quot;</span><span class="p">],</span></div><div class='line' id='LC218'><span class="mi">4</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#d7191c&quot;</span><span class="p">,</span><span class="s2">&quot;#fdae61&quot;</span><span class="p">,</span><span class="s2">&quot;#abdda4&quot;</span><span class="p">,</span><span class="s2">&quot;#2b83ba&quot;</span><span class="p">],</span></div><div class='line' id='LC219'><span class="mi">5</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#d7191c&quot;</span><span class="p">,</span><span class="s2">&quot;#fdae61&quot;</span><span class="p">,</span><span class="s2">&quot;#ffffbf&quot;</span><span class="p">,</span><span class="s2">&quot;#abdda4&quot;</span><span class="p">,</span><span class="s2">&quot;#2b83ba&quot;</span><span class="p">],</span></div><div class='line' id='LC220'><span class="mi">6</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#d53e4f&quot;</span><span class="p">,</span><span class="s2">&quot;#fc8d59&quot;</span><span class="p">,</span><span class="s2">&quot;#fee08b&quot;</span><span class="p">,</span><span class="s2">&quot;#e6f598&quot;</span><span class="p">,</span><span class="s2">&quot;#99d594&quot;</span><span class="p">,</span><span class="s2">&quot;#3288bd&quot;</span><span class="p">],</span></div><div class='line' id='LC221'><span class="mi">7</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#d53e4f&quot;</span><span class="p">,</span><span class="s2">&quot;#fc8d59&quot;</span><span class="p">,</span><span class="s2">&quot;#fee08b&quot;</span><span class="p">,</span><span class="s2">&quot;#ffffbf&quot;</span><span class="p">,</span><span class="s2">&quot;#e6f598&quot;</span><span class="p">,</span><span class="s2">&quot;#99d594&quot;</span><span class="p">,</span><span class="s2">&quot;#3288bd&quot;</span><span class="p">],</span></div><div class='line' id='LC222'><span class="mi">8</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#d53e4f&quot;</span><span class="p">,</span><span class="s2">&quot;#f46d43&quot;</span><span class="p">,</span><span class="s2">&quot;#fdae61&quot;</span><span class="p">,</span><span class="s2">&quot;#fee08b&quot;</span><span class="p">,</span><span class="s2">&quot;#e6f598&quot;</span><span class="p">,</span><span class="s2">&quot;#abdda4&quot;</span><span class="p">,</span><span class="s2">&quot;#66c2a5&quot;</span><span class="p">,</span><span class="s2">&quot;#3288bd&quot;</span><span class="p">],</span></div><div class='line' id='LC223'><span class="mi">9</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#d53e4f&quot;</span><span class="p">,</span><span class="s2">&quot;#f46d43&quot;</span><span class="p">,</span><span class="s2">&quot;#fdae61&quot;</span><span class="p">,</span><span class="s2">&quot;#fee08b&quot;</span><span class="p">,</span><span class="s2">&quot;#ffffbf&quot;</span><span class="p">,</span><span class="s2">&quot;#e6f598&quot;</span><span class="p">,</span><span class="s2">&quot;#abdda4&quot;</span><span class="p">,</span><span class="s2">&quot;#66c2a5&quot;</span><span class="p">,</span><span class="s2">&quot;#3288bd&quot;</span><span class="p">],</span></div><div class='line' id='LC224'><span class="mi">10</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#9e0142&quot;</span><span class="p">,</span><span class="s2">&quot;#d53e4f&quot;</span><span class="p">,</span><span class="s2">&quot;#f46d43&quot;</span><span class="p">,</span><span class="s2">&quot;#fdae61&quot;</span><span class="p">,</span><span class="s2">&quot;#fee08b&quot;</span><span class="p">,</span><span class="s2">&quot;#e6f598&quot;</span><span class="p">,</span><span class="s2">&quot;#abdda4&quot;</span><span class="p">,</span><span class="s2">&quot;#66c2a5&quot;</span><span class="p">,</span><span class="s2">&quot;#3288bd&quot;</span><span class="p">,</span><span class="s2">&quot;#5e4fa2&quot;</span><span class="p">],</span></div><div class='line' id='LC225'><span class="mi">11</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#9e0142&quot;</span><span class="p">,</span><span class="s2">&quot;#d53e4f&quot;</span><span class="p">,</span><span class="s2">&quot;#f46d43&quot;</span><span class="p">,</span><span class="s2">&quot;#fdae61&quot;</span><span class="p">,</span><span class="s2">&quot;#fee08b&quot;</span><span class="p">,</span><span class="s2">&quot;#ffffbf&quot;</span><span class="p">,</span><span class="s2">&quot;#e6f598&quot;</span><span class="p">,</span><span class="s2">&quot;#abdda4&quot;</span><span class="p">,</span><span class="s2">&quot;#66c2a5&quot;</span><span class="p">,</span><span class="s2">&quot;#3288bd&quot;</span><span class="p">,</span><span class="s2">&quot;#5e4fa2&quot;</span><span class="p">]</span></div><div class='line' id='LC226'><span class="p">},</span><span class="nx">RdYlGn</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC227'><span class="mi">3</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#fc8d59&quot;</span><span class="p">,</span><span class="s2">&quot;#ffffbf&quot;</span><span class="p">,</span><span class="s2">&quot;#91cf60&quot;</span><span class="p">],</span></div><div class='line' id='LC228'><span class="mi">4</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#d7191c&quot;</span><span class="p">,</span><span class="s2">&quot;#fdae61&quot;</span><span class="p">,</span><span class="s2">&quot;#a6d96a&quot;</span><span class="p">,</span><span class="s2">&quot;#1a9641&quot;</span><span class="p">],</span></div><div class='line' id='LC229'><span class="mi">5</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#d7191c&quot;</span><span class="p">,</span><span class="s2">&quot;#fdae61&quot;</span><span class="p">,</span><span class="s2">&quot;#ffffbf&quot;</span><span class="p">,</span><span class="s2">&quot;#a6d96a&quot;</span><span class="p">,</span><span class="s2">&quot;#1a9641&quot;</span><span class="p">],</span></div><div class='line' id='LC230'><span class="mi">6</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#d73027&quot;</span><span class="p">,</span><span class="s2">&quot;#fc8d59&quot;</span><span class="p">,</span><span class="s2">&quot;#fee08b&quot;</span><span class="p">,</span><span class="s2">&quot;#d9ef8b&quot;</span><span class="p">,</span><span class="s2">&quot;#91cf60&quot;</span><span class="p">,</span><span class="s2">&quot;#1a9850&quot;</span><span class="p">],</span></div><div class='line' id='LC231'><span class="mi">7</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#d73027&quot;</span><span class="p">,</span><span class="s2">&quot;#fc8d59&quot;</span><span class="p">,</span><span class="s2">&quot;#fee08b&quot;</span><span class="p">,</span><span class="s2">&quot;#ffffbf&quot;</span><span class="p">,</span><span class="s2">&quot;#d9ef8b&quot;</span><span class="p">,</span><span class="s2">&quot;#91cf60&quot;</span><span class="p">,</span><span class="s2">&quot;#1a9850&quot;</span><span class="p">],</span></div><div class='line' id='LC232'><span class="mi">8</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#d73027&quot;</span><span class="p">,</span><span class="s2">&quot;#f46d43&quot;</span><span class="p">,</span><span class="s2">&quot;#fdae61&quot;</span><span class="p">,</span><span class="s2">&quot;#fee08b&quot;</span><span class="p">,</span><span class="s2">&quot;#d9ef8b&quot;</span><span class="p">,</span><span class="s2">&quot;#a6d96a&quot;</span><span class="p">,</span><span class="s2">&quot;#66bd63&quot;</span><span class="p">,</span><span class="s2">&quot;#1a9850&quot;</span><span class="p">],</span></div><div class='line' id='LC233'><span class="mi">9</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#d73027&quot;</span><span class="p">,</span><span class="s2">&quot;#f46d43&quot;</span><span class="p">,</span><span class="s2">&quot;#fdae61&quot;</span><span class="p">,</span><span class="s2">&quot;#fee08b&quot;</span><span class="p">,</span><span class="s2">&quot;#ffffbf&quot;</span><span class="p">,</span><span class="s2">&quot;#d9ef8b&quot;</span><span class="p">,</span><span class="s2">&quot;#a6d96a&quot;</span><span class="p">,</span><span class="s2">&quot;#66bd63&quot;</span><span class="p">,</span><span class="s2">&quot;#1a9850&quot;</span><span class="p">],</span></div><div class='line' id='LC234'><span class="mi">10</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#a50026&quot;</span><span class="p">,</span><span class="s2">&quot;#d73027&quot;</span><span class="p">,</span><span class="s2">&quot;#f46d43&quot;</span><span class="p">,</span><span class="s2">&quot;#fdae61&quot;</span><span class="p">,</span><span class="s2">&quot;#fee08b&quot;</span><span class="p">,</span><span class="s2">&quot;#d9ef8b&quot;</span><span class="p">,</span><span class="s2">&quot;#a6d96a&quot;</span><span class="p">,</span><span class="s2">&quot;#66bd63&quot;</span><span class="p">,</span><span class="s2">&quot;#1a9850&quot;</span><span class="p">,</span><span class="s2">&quot;#006837&quot;</span><span class="p">],</span></div><div class='line' id='LC235'><span class="mi">11</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#a50026&quot;</span><span class="p">,</span><span class="s2">&quot;#d73027&quot;</span><span class="p">,</span><span class="s2">&quot;#f46d43&quot;</span><span class="p">,</span><span class="s2">&quot;#fdae61&quot;</span><span class="p">,</span><span class="s2">&quot;#fee08b&quot;</span><span class="p">,</span><span class="s2">&quot;#ffffbf&quot;</span><span class="p">,</span><span class="s2">&quot;#d9ef8b&quot;</span><span class="p">,</span><span class="s2">&quot;#a6d96a&quot;</span><span class="p">,</span><span class="s2">&quot;#66bd63&quot;</span><span class="p">,</span><span class="s2">&quot;#1a9850&quot;</span><span class="p">,</span><span class="s2">&quot;#006837&quot;</span><span class="p">]</span></div><div class='line' id='LC236'><span class="p">},</span><span class="nx">Accent</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC237'><span class="mi">3</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#7fc97f&quot;</span><span class="p">,</span><span class="s2">&quot;#beaed4&quot;</span><span class="p">,</span><span class="s2">&quot;#fdc086&quot;</span><span class="p">],</span></div><div class='line' id='LC238'><span class="mi">4</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#7fc97f&quot;</span><span class="p">,</span><span class="s2">&quot;#beaed4&quot;</span><span class="p">,</span><span class="s2">&quot;#fdc086&quot;</span><span class="p">,</span><span class="s2">&quot;#ffff99&quot;</span><span class="p">],</span></div><div class='line' id='LC239'><span class="mi">5</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#7fc97f&quot;</span><span class="p">,</span><span class="s2">&quot;#beaed4&quot;</span><span class="p">,</span><span class="s2">&quot;#fdc086&quot;</span><span class="p">,</span><span class="s2">&quot;#ffff99&quot;</span><span class="p">,</span><span class="s2">&quot;#386cb0&quot;</span><span class="p">],</span></div><div class='line' id='LC240'><span class="mi">6</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#7fc97f&quot;</span><span class="p">,</span><span class="s2">&quot;#beaed4&quot;</span><span class="p">,</span><span class="s2">&quot;#fdc086&quot;</span><span class="p">,</span><span class="s2">&quot;#ffff99&quot;</span><span class="p">,</span><span class="s2">&quot;#386cb0&quot;</span><span class="p">,</span><span class="s2">&quot;#f0027f&quot;</span><span class="p">],</span></div><div class='line' id='LC241'><span class="mi">7</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#7fc97f&quot;</span><span class="p">,</span><span class="s2">&quot;#beaed4&quot;</span><span class="p">,</span><span class="s2">&quot;#fdc086&quot;</span><span class="p">,</span><span class="s2">&quot;#ffff99&quot;</span><span class="p">,</span><span class="s2">&quot;#386cb0&quot;</span><span class="p">,</span><span class="s2">&quot;#f0027f&quot;</span><span class="p">,</span><span class="s2">&quot;#bf5b17&quot;</span><span class="p">],</span></div><div class='line' id='LC242'><span class="mi">8</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#7fc97f&quot;</span><span class="p">,</span><span class="s2">&quot;#beaed4&quot;</span><span class="p">,</span><span class="s2">&quot;#fdc086&quot;</span><span class="p">,</span><span class="s2">&quot;#ffff99&quot;</span><span class="p">,</span><span class="s2">&quot;#386cb0&quot;</span><span class="p">,</span><span class="s2">&quot;#f0027f&quot;</span><span class="p">,</span><span class="s2">&quot;#bf5b17&quot;</span><span class="p">,</span><span class="s2">&quot;#666666&quot;</span><span class="p">]</span></div><div class='line' id='LC243'><span class="p">},</span><span class="nx">Dark2</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC244'><span class="mi">3</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#1b9e77&quot;</span><span class="p">,</span><span class="s2">&quot;#d95f02&quot;</span><span class="p">,</span><span class="s2">&quot;#7570b3&quot;</span><span class="p">],</span></div><div class='line' id='LC245'><span class="mi">4</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#1b9e77&quot;</span><span class="p">,</span><span class="s2">&quot;#d95f02&quot;</span><span class="p">,</span><span class="s2">&quot;#7570b3&quot;</span><span class="p">,</span><span class="s2">&quot;#e7298a&quot;</span><span class="p">],</span></div><div class='line' id='LC246'><span class="mi">5</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#1b9e77&quot;</span><span class="p">,</span><span class="s2">&quot;#d95f02&quot;</span><span class="p">,</span><span class="s2">&quot;#7570b3&quot;</span><span class="p">,</span><span class="s2">&quot;#e7298a&quot;</span><span class="p">,</span><span class="s2">&quot;#66a61e&quot;</span><span class="p">],</span></div><div class='line' id='LC247'><span class="mi">6</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#1b9e77&quot;</span><span class="p">,</span><span class="s2">&quot;#d95f02&quot;</span><span class="p">,</span><span class="s2">&quot;#7570b3&quot;</span><span class="p">,</span><span class="s2">&quot;#e7298a&quot;</span><span class="p">,</span><span class="s2">&quot;#66a61e&quot;</span><span class="p">,</span><span class="s2">&quot;#e6ab02&quot;</span><span class="p">],</span></div><div class='line' id='LC248'><span class="mi">7</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#1b9e77&quot;</span><span class="p">,</span><span class="s2">&quot;#d95f02&quot;</span><span class="p">,</span><span class="s2">&quot;#7570b3&quot;</span><span class="p">,</span><span class="s2">&quot;#e7298a&quot;</span><span class="p">,</span><span class="s2">&quot;#66a61e&quot;</span><span class="p">,</span><span class="s2">&quot;#e6ab02&quot;</span><span class="p">,</span><span class="s2">&quot;#a6761d&quot;</span><span class="p">],</span></div><div class='line' id='LC249'><span class="mi">8</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#1b9e77&quot;</span><span class="p">,</span><span class="s2">&quot;#d95f02&quot;</span><span class="p">,</span><span class="s2">&quot;#7570b3&quot;</span><span class="p">,</span><span class="s2">&quot;#e7298a&quot;</span><span class="p">,</span><span class="s2">&quot;#66a61e&quot;</span><span class="p">,</span><span class="s2">&quot;#e6ab02&quot;</span><span class="p">,</span><span class="s2">&quot;#a6761d&quot;</span><span class="p">,</span><span class="s2">&quot;#666666&quot;</span><span class="p">]</span></div><div class='line' id='LC250'><span class="p">},</span><span class="nx">Paired</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC251'><span class="mi">3</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#a6cee3&quot;</span><span class="p">,</span><span class="s2">&quot;#1f78b4&quot;</span><span class="p">,</span><span class="s2">&quot;#b2df8a&quot;</span><span class="p">],</span></div><div class='line' id='LC252'><span class="mi">4</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#a6cee3&quot;</span><span class="p">,</span><span class="s2">&quot;#1f78b4&quot;</span><span class="p">,</span><span class="s2">&quot;#b2df8a&quot;</span><span class="p">,</span><span class="s2">&quot;#33a02c&quot;</span><span class="p">],</span></div><div class='line' id='LC253'><span class="mi">5</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#a6cee3&quot;</span><span class="p">,</span><span class="s2">&quot;#1f78b4&quot;</span><span class="p">,</span><span class="s2">&quot;#b2df8a&quot;</span><span class="p">,</span><span class="s2">&quot;#33a02c&quot;</span><span class="p">,</span><span class="s2">&quot;#fb9a99&quot;</span><span class="p">],</span></div><div class='line' id='LC254'><span class="mi">6</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#a6cee3&quot;</span><span class="p">,</span><span class="s2">&quot;#1f78b4&quot;</span><span class="p">,</span><span class="s2">&quot;#b2df8a&quot;</span><span class="p">,</span><span class="s2">&quot;#33a02c&quot;</span><span class="p">,</span><span class="s2">&quot;#fb9a99&quot;</span><span class="p">,</span><span class="s2">&quot;#e31a1c&quot;</span><span class="p">],</span></div><div class='line' id='LC255'><span class="mi">7</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#a6cee3&quot;</span><span class="p">,</span><span class="s2">&quot;#1f78b4&quot;</span><span class="p">,</span><span class="s2">&quot;#b2df8a&quot;</span><span class="p">,</span><span class="s2">&quot;#33a02c&quot;</span><span class="p">,</span><span class="s2">&quot;#fb9a99&quot;</span><span class="p">,</span><span class="s2">&quot;#e31a1c&quot;</span><span class="p">,</span><span class="s2">&quot;#fdbf6f&quot;</span><span class="p">],</span></div><div class='line' id='LC256'><span class="mi">8</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#a6cee3&quot;</span><span class="p">,</span><span class="s2">&quot;#1f78b4&quot;</span><span class="p">,</span><span class="s2">&quot;#b2df8a&quot;</span><span class="p">,</span><span class="s2">&quot;#33a02c&quot;</span><span class="p">,</span><span class="s2">&quot;#fb9a99&quot;</span><span class="p">,</span><span class="s2">&quot;#e31a1c&quot;</span><span class="p">,</span><span class="s2">&quot;#fdbf6f&quot;</span><span class="p">,</span><span class="s2">&quot;#ff7f00&quot;</span><span class="p">],</span></div><div class='line' id='LC257'><span class="mi">9</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#a6cee3&quot;</span><span class="p">,</span><span class="s2">&quot;#1f78b4&quot;</span><span class="p">,</span><span class="s2">&quot;#b2df8a&quot;</span><span class="p">,</span><span class="s2">&quot;#33a02c&quot;</span><span class="p">,</span><span class="s2">&quot;#fb9a99&quot;</span><span class="p">,</span><span class="s2">&quot;#e31a1c&quot;</span><span class="p">,</span><span class="s2">&quot;#fdbf6f&quot;</span><span class="p">,</span><span class="s2">&quot;#ff7f00&quot;</span><span class="p">,</span><span class="s2">&quot;#cab2d6&quot;</span><span class="p">],</span></div><div class='line' id='LC258'><span class="mi">10</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#a6cee3&quot;</span><span class="p">,</span><span class="s2">&quot;#1f78b4&quot;</span><span class="p">,</span><span class="s2">&quot;#b2df8a&quot;</span><span class="p">,</span><span class="s2">&quot;#33a02c&quot;</span><span class="p">,</span><span class="s2">&quot;#fb9a99&quot;</span><span class="p">,</span><span class="s2">&quot;#e31a1c&quot;</span><span class="p">,</span><span class="s2">&quot;#fdbf6f&quot;</span><span class="p">,</span><span class="s2">&quot;#ff7f00&quot;</span><span class="p">,</span><span class="s2">&quot;#cab2d6&quot;</span><span class="p">,</span><span class="s2">&quot;#6a3d9a&quot;</span><span class="p">],</span></div><div class='line' id='LC259'><span class="mi">11</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#a6cee3&quot;</span><span class="p">,</span><span class="s2">&quot;#1f78b4&quot;</span><span class="p">,</span><span class="s2">&quot;#b2df8a&quot;</span><span class="p">,</span><span class="s2">&quot;#33a02c&quot;</span><span class="p">,</span><span class="s2">&quot;#fb9a99&quot;</span><span class="p">,</span><span class="s2">&quot;#e31a1c&quot;</span><span class="p">,</span><span class="s2">&quot;#fdbf6f&quot;</span><span class="p">,</span><span class="s2">&quot;#ff7f00&quot;</span><span class="p">,</span><span class="s2">&quot;#cab2d6&quot;</span><span class="p">,</span><span class="s2">&quot;#6a3d9a&quot;</span><span class="p">,</span><span class="s2">&quot;#ffff99&quot;</span><span class="p">],</span></div><div class='line' id='LC260'><span class="mi">12</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#a6cee3&quot;</span><span class="p">,</span><span class="s2">&quot;#1f78b4&quot;</span><span class="p">,</span><span class="s2">&quot;#b2df8a&quot;</span><span class="p">,</span><span class="s2">&quot;#33a02c&quot;</span><span class="p">,</span><span class="s2">&quot;#fb9a99&quot;</span><span class="p">,</span><span class="s2">&quot;#e31a1c&quot;</span><span class="p">,</span><span class="s2">&quot;#fdbf6f&quot;</span><span class="p">,</span><span class="s2">&quot;#ff7f00&quot;</span><span class="p">,</span><span class="s2">&quot;#cab2d6&quot;</span><span class="p">,</span><span class="s2">&quot;#6a3d9a&quot;</span><span class="p">,</span><span class="s2">&quot;#ffff99&quot;</span><span class="p">,</span><span class="s2">&quot;#b15928&quot;</span><span class="p">]</span></div><div class='line' id='LC261'><span class="p">},</span><span class="nx">Pastel1</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC262'><span class="mi">3</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#fbb4ae&quot;</span><span class="p">,</span><span class="s2">&quot;#b3cde3&quot;</span><span class="p">,</span><span class="s2">&quot;#ccebc5&quot;</span><span class="p">],</span></div><div class='line' id='LC263'><span class="mi">4</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#fbb4ae&quot;</span><span class="p">,</span><span class="s2">&quot;#b3cde3&quot;</span><span class="p">,</span><span class="s2">&quot;#ccebc5&quot;</span><span class="p">,</span><span class="s2">&quot;#decbe4&quot;</span><span class="p">],</span></div><div class='line' id='LC264'><span class="mi">5</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#fbb4ae&quot;</span><span class="p">,</span><span class="s2">&quot;#b3cde3&quot;</span><span class="p">,</span><span class="s2">&quot;#ccebc5&quot;</span><span class="p">,</span><span class="s2">&quot;#decbe4&quot;</span><span class="p">,</span><span class="s2">&quot;#fed9a6&quot;</span><span class="p">],</span></div><div class='line' id='LC265'><span class="mi">6</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#fbb4ae&quot;</span><span class="p">,</span><span class="s2">&quot;#b3cde3&quot;</span><span class="p">,</span><span class="s2">&quot;#ccebc5&quot;</span><span class="p">,</span><span class="s2">&quot;#decbe4&quot;</span><span class="p">,</span><span class="s2">&quot;#fed9a6&quot;</span><span class="p">,</span><span class="s2">&quot;#ffffcc&quot;</span><span class="p">],</span></div><div class='line' id='LC266'><span class="mi">7</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#fbb4ae&quot;</span><span class="p">,</span><span class="s2">&quot;#b3cde3&quot;</span><span class="p">,</span><span class="s2">&quot;#ccebc5&quot;</span><span class="p">,</span><span class="s2">&quot;#decbe4&quot;</span><span class="p">,</span><span class="s2">&quot;#fed9a6&quot;</span><span class="p">,</span><span class="s2">&quot;#ffffcc&quot;</span><span class="p">,</span><span class="s2">&quot;#e5d8bd&quot;</span><span class="p">],</span></div><div class='line' id='LC267'><span class="mi">8</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#fbb4ae&quot;</span><span class="p">,</span><span class="s2">&quot;#b3cde3&quot;</span><span class="p">,</span><span class="s2">&quot;#ccebc5&quot;</span><span class="p">,</span><span class="s2">&quot;#decbe4&quot;</span><span class="p">,</span><span class="s2">&quot;#fed9a6&quot;</span><span class="p">,</span><span class="s2">&quot;#ffffcc&quot;</span><span class="p">,</span><span class="s2">&quot;#e5d8bd&quot;</span><span class="p">,</span><span class="s2">&quot;#fddaec&quot;</span><span class="p">],</span></div><div class='line' id='LC268'><span class="mi">9</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#fbb4ae&quot;</span><span class="p">,</span><span class="s2">&quot;#b3cde3&quot;</span><span class="p">,</span><span class="s2">&quot;#ccebc5&quot;</span><span class="p">,</span><span class="s2">&quot;#decbe4&quot;</span><span class="p">,</span><span class="s2">&quot;#fed9a6&quot;</span><span class="p">,</span><span class="s2">&quot;#ffffcc&quot;</span><span class="p">,</span><span class="s2">&quot;#e5d8bd&quot;</span><span class="p">,</span><span class="s2">&quot;#fddaec&quot;</span><span class="p">,</span><span class="s2">&quot;#f2f2f2&quot;</span><span class="p">]</span></div><div class='line' id='LC269'><span class="p">},</span><span class="nx">Pastel2</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC270'><span class="mi">3</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#b3e2cd&quot;</span><span class="p">,</span><span class="s2">&quot;#fdcdac&quot;</span><span class="p">,</span><span class="s2">&quot;#cbd5e8&quot;</span><span class="p">],</span></div><div class='line' id='LC271'><span class="mi">4</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#b3e2cd&quot;</span><span class="p">,</span><span class="s2">&quot;#fdcdac&quot;</span><span class="p">,</span><span class="s2">&quot;#cbd5e8&quot;</span><span class="p">,</span><span class="s2">&quot;#f4cae4&quot;</span><span class="p">],</span></div><div class='line' id='LC272'><span class="mi">5</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#b3e2cd&quot;</span><span class="p">,</span><span class="s2">&quot;#fdcdac&quot;</span><span class="p">,</span><span class="s2">&quot;#cbd5e8&quot;</span><span class="p">,</span><span class="s2">&quot;#f4cae4&quot;</span><span class="p">,</span><span class="s2">&quot;#e6f5c9&quot;</span><span class="p">],</span></div><div class='line' id='LC273'><span class="mi">6</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#b3e2cd&quot;</span><span class="p">,</span><span class="s2">&quot;#fdcdac&quot;</span><span class="p">,</span><span class="s2">&quot;#cbd5e8&quot;</span><span class="p">,</span><span class="s2">&quot;#f4cae4&quot;</span><span class="p">,</span><span class="s2">&quot;#e6f5c9&quot;</span><span class="p">,</span><span class="s2">&quot;#fff2ae&quot;</span><span class="p">],</span></div><div class='line' id='LC274'><span class="mi">7</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#b3e2cd&quot;</span><span class="p">,</span><span class="s2">&quot;#fdcdac&quot;</span><span class="p">,</span><span class="s2">&quot;#cbd5e8&quot;</span><span class="p">,</span><span class="s2">&quot;#f4cae4&quot;</span><span class="p">,</span><span class="s2">&quot;#e6f5c9&quot;</span><span class="p">,</span><span class="s2">&quot;#fff2ae&quot;</span><span class="p">,</span><span class="s2">&quot;#f1e2cc&quot;</span><span class="p">],</span></div><div class='line' id='LC275'><span class="mi">8</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#b3e2cd&quot;</span><span class="p">,</span><span class="s2">&quot;#fdcdac&quot;</span><span class="p">,</span><span class="s2">&quot;#cbd5e8&quot;</span><span class="p">,</span><span class="s2">&quot;#f4cae4&quot;</span><span class="p">,</span><span class="s2">&quot;#e6f5c9&quot;</span><span class="p">,</span><span class="s2">&quot;#fff2ae&quot;</span><span class="p">,</span><span class="s2">&quot;#f1e2cc&quot;</span><span class="p">,</span><span class="s2">&quot;#cccccc&quot;</span><span class="p">]</span></div><div class='line' id='LC276'><span class="p">},</span><span class="nx">Set1</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC277'><span class="mi">3</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#e41a1c&quot;</span><span class="p">,</span><span class="s2">&quot;#377eb8&quot;</span><span class="p">,</span><span class="s2">&quot;#4daf4a&quot;</span><span class="p">],</span></div><div class='line' id='LC278'><span class="mi">4</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#e41a1c&quot;</span><span class="p">,</span><span class="s2">&quot;#377eb8&quot;</span><span class="p">,</span><span class="s2">&quot;#4daf4a&quot;</span><span class="p">,</span><span class="s2">&quot;#984ea3&quot;</span><span class="p">],</span></div><div class='line' id='LC279'><span class="mi">5</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#e41a1c&quot;</span><span class="p">,</span><span class="s2">&quot;#377eb8&quot;</span><span class="p">,</span><span class="s2">&quot;#4daf4a&quot;</span><span class="p">,</span><span class="s2">&quot;#984ea3&quot;</span><span class="p">,</span><span class="s2">&quot;#ff7f00&quot;</span><span class="p">],</span></div><div class='line' id='LC280'><span class="mi">6</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#e41a1c&quot;</span><span class="p">,</span><span class="s2">&quot;#377eb8&quot;</span><span class="p">,</span><span class="s2">&quot;#4daf4a&quot;</span><span class="p">,</span><span class="s2">&quot;#984ea3&quot;</span><span class="p">,</span><span class="s2">&quot;#ff7f00&quot;</span><span class="p">,</span><span class="s2">&quot;#ffff33&quot;</span><span class="p">],</span></div><div class='line' id='LC281'><span class="mi">7</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#e41a1c&quot;</span><span class="p">,</span><span class="s2">&quot;#377eb8&quot;</span><span class="p">,</span><span class="s2">&quot;#4daf4a&quot;</span><span class="p">,</span><span class="s2">&quot;#984ea3&quot;</span><span class="p">,</span><span class="s2">&quot;#ff7f00&quot;</span><span class="p">,</span><span class="s2">&quot;#ffff33&quot;</span><span class="p">,</span><span class="s2">&quot;#a65628&quot;</span><span class="p">],</span></div><div class='line' id='LC282'><span class="mi">8</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#e41a1c&quot;</span><span class="p">,</span><span class="s2">&quot;#377eb8&quot;</span><span class="p">,</span><span class="s2">&quot;#4daf4a&quot;</span><span class="p">,</span><span class="s2">&quot;#984ea3&quot;</span><span class="p">,</span><span class="s2">&quot;#ff7f00&quot;</span><span class="p">,</span><span class="s2">&quot;#ffff33&quot;</span><span class="p">,</span><span class="s2">&quot;#a65628&quot;</span><span class="p">,</span><span class="s2">&quot;#f781bf&quot;</span><span class="p">],</span></div><div class='line' id='LC283'><span class="mi">9</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#e41a1c&quot;</span><span class="p">,</span><span class="s2">&quot;#377eb8&quot;</span><span class="p">,</span><span class="s2">&quot;#4daf4a&quot;</span><span class="p">,</span><span class="s2">&quot;#984ea3&quot;</span><span class="p">,</span><span class="s2">&quot;#ff7f00&quot;</span><span class="p">,</span><span class="s2">&quot;#ffff33&quot;</span><span class="p">,</span><span class="s2">&quot;#a65628&quot;</span><span class="p">,</span><span class="s2">&quot;#f781bf&quot;</span><span class="p">,</span><span class="s2">&quot;#999999&quot;</span><span class="p">]</span></div><div class='line' id='LC284'><span class="p">},</span><span class="nx">Set2</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC285'><span class="mi">3</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#66c2a5&quot;</span><span class="p">,</span><span class="s2">&quot;#fc8d62&quot;</span><span class="p">,</span><span class="s2">&quot;#8da0cb&quot;</span><span class="p">],</span></div><div class='line' id='LC286'><span class="mi">4</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#66c2a5&quot;</span><span class="p">,</span><span class="s2">&quot;#fc8d62&quot;</span><span class="p">,</span><span class="s2">&quot;#8da0cb&quot;</span><span class="p">,</span><span class="s2">&quot;#e78ac3&quot;</span><span class="p">],</span></div><div class='line' id='LC287'><span class="mi">5</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#66c2a5&quot;</span><span class="p">,</span><span class="s2">&quot;#fc8d62&quot;</span><span class="p">,</span><span class="s2">&quot;#8da0cb&quot;</span><span class="p">,</span><span class="s2">&quot;#e78ac3&quot;</span><span class="p">,</span><span class="s2">&quot;#a6d854&quot;</span><span class="p">],</span></div><div class='line' id='LC288'><span class="mi">6</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#66c2a5&quot;</span><span class="p">,</span><span class="s2">&quot;#fc8d62&quot;</span><span class="p">,</span><span class="s2">&quot;#8da0cb&quot;</span><span class="p">,</span><span class="s2">&quot;#e78ac3&quot;</span><span class="p">,</span><span class="s2">&quot;#a6d854&quot;</span><span class="p">,</span><span class="s2">&quot;#ffd92f&quot;</span><span class="p">],</span></div><div class='line' id='LC289'><span class="mi">7</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#66c2a5&quot;</span><span class="p">,</span><span class="s2">&quot;#fc8d62&quot;</span><span class="p">,</span><span class="s2">&quot;#8da0cb&quot;</span><span class="p">,</span><span class="s2">&quot;#e78ac3&quot;</span><span class="p">,</span><span class="s2">&quot;#a6d854&quot;</span><span class="p">,</span><span class="s2">&quot;#ffd92f&quot;</span><span class="p">,</span><span class="s2">&quot;#e5c494&quot;</span><span class="p">],</span></div><div class='line' id='LC290'><span class="mi">8</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#66c2a5&quot;</span><span class="p">,</span><span class="s2">&quot;#fc8d62&quot;</span><span class="p">,</span><span class="s2">&quot;#8da0cb&quot;</span><span class="p">,</span><span class="s2">&quot;#e78ac3&quot;</span><span class="p">,</span><span class="s2">&quot;#a6d854&quot;</span><span class="p">,</span><span class="s2">&quot;#ffd92f&quot;</span><span class="p">,</span><span class="s2">&quot;#e5c494&quot;</span><span class="p">,</span><span class="s2">&quot;#b3b3b3&quot;</span><span class="p">]</span></div><div class='line' id='LC291'><span class="p">},</span><span class="nx">Set3</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC292'><span class="mi">3</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#8dd3c7&quot;</span><span class="p">,</span><span class="s2">&quot;#ffffb3&quot;</span><span class="p">,</span><span class="s2">&quot;#bebada&quot;</span><span class="p">],</span></div><div class='line' id='LC293'><span class="mi">4</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#8dd3c7&quot;</span><span class="p">,</span><span class="s2">&quot;#ffffb3&quot;</span><span class="p">,</span><span class="s2">&quot;#bebada&quot;</span><span class="p">,</span><span class="s2">&quot;#fb8072&quot;</span><span class="p">],</span></div><div class='line' id='LC294'><span class="mi">5</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#8dd3c7&quot;</span><span class="p">,</span><span class="s2">&quot;#ffffb3&quot;</span><span class="p">,</span><span class="s2">&quot;#bebada&quot;</span><span class="p">,</span><span class="s2">&quot;#fb8072&quot;</span><span class="p">,</span><span class="s2">&quot;#80b1d3&quot;</span><span class="p">],</span></div><div class='line' id='LC295'><span class="mi">6</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#8dd3c7&quot;</span><span class="p">,</span><span class="s2">&quot;#ffffb3&quot;</span><span class="p">,</span><span class="s2">&quot;#bebada&quot;</span><span class="p">,</span><span class="s2">&quot;#fb8072&quot;</span><span class="p">,</span><span class="s2">&quot;#80b1d3&quot;</span><span class="p">,</span><span class="s2">&quot;#fdb462&quot;</span><span class="p">],</span></div><div class='line' id='LC296'><span class="mi">7</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#8dd3c7&quot;</span><span class="p">,</span><span class="s2">&quot;#ffffb3&quot;</span><span class="p">,</span><span class="s2">&quot;#bebada&quot;</span><span class="p">,</span><span class="s2">&quot;#fb8072&quot;</span><span class="p">,</span><span class="s2">&quot;#80b1d3&quot;</span><span class="p">,</span><span class="s2">&quot;#fdb462&quot;</span><span class="p">,</span><span class="s2">&quot;#b3de69&quot;</span><span class="p">],</span></div><div class='line' id='LC297'><span class="mi">8</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#8dd3c7&quot;</span><span class="p">,</span><span class="s2">&quot;#ffffb3&quot;</span><span class="p">,</span><span class="s2">&quot;#bebada&quot;</span><span class="p">,</span><span class="s2">&quot;#fb8072&quot;</span><span class="p">,</span><span class="s2">&quot;#80b1d3&quot;</span><span class="p">,</span><span class="s2">&quot;#fdb462&quot;</span><span class="p">,</span><span class="s2">&quot;#b3de69&quot;</span><span class="p">,</span><span class="s2">&quot;#fccde5&quot;</span><span class="p">],</span></div><div class='line' id='LC298'><span class="mi">9</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#8dd3c7&quot;</span><span class="p">,</span><span class="s2">&quot;#ffffb3&quot;</span><span class="p">,</span><span class="s2">&quot;#bebada&quot;</span><span class="p">,</span><span class="s2">&quot;#fb8072&quot;</span><span class="p">,</span><span class="s2">&quot;#80b1d3&quot;</span><span class="p">,</span><span class="s2">&quot;#fdb462&quot;</span><span class="p">,</span><span class="s2">&quot;#b3de69&quot;</span><span class="p">,</span><span class="s2">&quot;#fccde5&quot;</span><span class="p">,</span><span class="s2">&quot;#d9d9d9&quot;</span><span class="p">],</span></div><div class='line' id='LC299'><span class="mi">10</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#8dd3c7&quot;</span><span class="p">,</span><span class="s2">&quot;#ffffb3&quot;</span><span class="p">,</span><span class="s2">&quot;#bebada&quot;</span><span class="p">,</span><span class="s2">&quot;#fb8072&quot;</span><span class="p">,</span><span class="s2">&quot;#80b1d3&quot;</span><span class="p">,</span><span class="s2">&quot;#fdb462&quot;</span><span class="p">,</span><span class="s2">&quot;#b3de69&quot;</span><span class="p">,</span><span class="s2">&quot;#fccde5&quot;</span><span class="p">,</span><span class="s2">&quot;#d9d9d9&quot;</span><span class="p">,</span><span class="s2">&quot;#bc80bd&quot;</span><span class="p">],</span></div><div class='line' id='LC300'><span class="mi">11</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#8dd3c7&quot;</span><span class="p">,</span><span class="s2">&quot;#ffffb3&quot;</span><span class="p">,</span><span class="s2">&quot;#bebada&quot;</span><span class="p">,</span><span class="s2">&quot;#fb8072&quot;</span><span class="p">,</span><span class="s2">&quot;#80b1d3&quot;</span><span class="p">,</span><span class="s2">&quot;#fdb462&quot;</span><span class="p">,</span><span class="s2">&quot;#b3de69&quot;</span><span class="p">,</span><span class="s2">&quot;#fccde5&quot;</span><span class="p">,</span><span class="s2">&quot;#d9d9d9&quot;</span><span class="p">,</span><span class="s2">&quot;#bc80bd&quot;</span><span class="p">,</span><span class="s2">&quot;#ccebc5&quot;</span><span class="p">],</span></div><div class='line' id='LC301'><span class="mi">12</span><span class="o">:</span> <span class="p">[</span><span class="s2">&quot;#8dd3c7&quot;</span><span class="p">,</span><span class="s2">&quot;#ffffb3&quot;</span><span class="p">,</span><span class="s2">&quot;#bebada&quot;</span><span class="p">,</span><span class="s2">&quot;#fb8072&quot;</span><span class="p">,</span><span class="s2">&quot;#80b1d3&quot;</span><span class="p">,</span><span class="s2">&quot;#fdb462&quot;</span><span class="p">,</span><span class="s2">&quot;#b3de69&quot;</span><span class="p">,</span><span class="s2">&quot;#fccde5&quot;</span><span class="p">,</span><span class="s2">&quot;#d9d9d9&quot;</span><span class="p">,</span><span class="s2">&quot;#bc80bd&quot;</span><span class="p">,</span><span class="s2">&quot;#ccebc5&quot;</span><span class="p">,</span><span class="s2">&quot;#ffed6f&quot;</span><span class="p">]</span></div><div class='line' id='LC302'><span class="p">}};</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <h2>Jump to Line</h2>
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="textfield js-jump-to-line-field" type="text">
            <div class="full-button">
              <button type="submit" class="button">Go</button>
            </div>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1360648843" height="64" width="64">
</div>


        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="https://github.com/about">About us</a></dd>
        <dd><a href="https://github.com/blog">Blog</a></dd>
        <dd><a href="https://github.com/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="https://github.com/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.07237s from fe3.rs.github.com">GitHub</span>, Inc. All rights reserved.</p>
    <a class="left" href="https://github.com/">
      <span class="mega-icon mega-icon-invertocat"></span>
    </a>
    <ul id="legal">
        <li><a href="https://github.com/site/terms">Terms of Service</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/mbostock/d3/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-icon mega-icon-normalscreen"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="mini-icon mini-icon-brightness"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="mini-icon mini-icon-remove-close ajax-error-dismiss"></a>
    </div>

    
    
    <span id='server_response_time' data-time='0.07275' data-host='fe3'></span>
    
  </body>
</html>

