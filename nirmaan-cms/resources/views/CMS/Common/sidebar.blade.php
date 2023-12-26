@php
    $urls = explode('/', $_SERVER['REQUEST_URI']);
    $activepage = $urls[count($urls) - 1];
@endphp

<div class="dashboard-sidebar">
    <div class="dashboard-sidebar-inner" data-simplebar>
        <div class="dashboard-nav-container">
            <a href="#" class="dashboard-responsive-nav-trigger">
                <span class="hamburger hamburger--collapse">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </span>
                <span class="trigger-title">Dashboard Navigation</span>
            </a>

            <div class="dashboard-nav">
                <div class="dashboard-nav-inner">
                    <ul data-submenu-title="Menu">
                        <li
                            @php if ($activepage == "dashboard") {
                            echo "class=active";
                        } @endphp>
                            <a href="{{ route('dashboard') }}"><i class="icon-material-outline-dashboard"></i>
                                Dashboard</a>
                        </li>
                        <li
                            @php if ($activepage == "teams") {
                            echo "class=active";
                        } @endphp>
                            <a href="{{ route('teams') }}"><i class="icon-material-outline-dashboard"></i>
                                Teams Page</a>
                        </li>
                        <li
                            @php if ($activepage == "this_is_nirmaan" || $activepage == "they_are_talking" || $activepage == "what_happens") {
								echo "class=active-submenu";
							} @endphp>
                            <a href="#"><i class="icon-material-outline-business-center"></i> Intro page</a>
                            <ul>
                                <li><a href="{{route('home.page1')}}">This Is Nirmaan</a></li>
                                <li><a href="{{route('home.page5')}}">They Are Talking </a></li>
                                <li><a href="{{route('home.page6')}}">What Happens In Nirmaan </a></li>
                            </ul>
                        </li>
                    </ul>

                    <ul data-submenu-title="Account">
                        <li
                            @php if ($activepage == "settings") {
                            echo "class=active";
                        } @endphp>
                            <a href="{{ route('settings') }}"><i class="icon-material-outline-settings"></i>
                                Settings</a>
                        </li>
                        <li><a href="{{ route('logout') }}"><i class="icon-material-outline-power-settings-new"></i>
                                Logout</a></li>
                    </ul>

                </div>
            </div>
        </div>
    </div>
</div>
