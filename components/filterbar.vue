<template>
<div class="filterbar">
	<label>Filter by</label>
	<div v-for="filter in filterbar" class="group">
		<label>
			<span>{{ filter.Title }}</span>
			<i class="icon-arrow_drop_down"></i>
			<i class="icon-arrow_drop_up"></i>
		</label>
		<ul class="tags">
			<li v-for="tagData in filter.Tags" class="tag" :data-tag="tagData">
				<i class="icon-check_box"></i>
				<i class="icon-check_box_outline_blank"></i>
				<span>{{ tagData }}</span>
			</li>
		</ul>
	</div>
</div>
</template>

<script>
export default {
	data() {
		return {
			filterbar: [{
					Title: "Platforms",
					Tags: [
						"Web",
						"Desktop",
						"Mobile"
					]
				},
				{
					Title: "Year",
					Tags: [
						"Year 1",
						"Year 2",
						"Year 3",
						"Year 4",
						"Year 5",
						"Year 6"
					]
				},
				{
					Title: "Project Type",
					Tags: [
						"Competition",
						"By Request",
						"Personal",
						"CS Module"
					]
				}
			]
		}
	}
}
</script>
